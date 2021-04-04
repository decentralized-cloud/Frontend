#!/usr/bin/env bash

# TODOS:
# - enabling rc.local on systemd based distros : https://www.cyberciti.biz/faq/how-to-enable-rc-local-shell-script-on-systemd-while-booting-linux-system/ 
# - maybe not fuck with potentially any existing rc.local file, atm we overwrite the content :-{
# - maybe doing the tmp dir thing is an extra step, we can avoid it

INSTALL_DIR="/etc/edgecloud9.io"
WATCHDOG="watchdog"
K3S_VERSION="v1.20.4+k3s1"
K3S_CLUSTER_IP=${ip} # ip IS JS A TEMPLATE VALUE
K3S_CLUSTER_PORT=${port} # port IS JS A TEMPLATE VALUE
K3S_CLIENT_TOKEN=${token} # token IS JS A TEMPLATE VALUE
K3S_BASE_URL="https://github.com/k3s-io/k3s/releases/download/$K3S_VERSION/k3s"
AGENT_START_CMD="sudo ./k3s agent --server https://$K3S_CLUSTER_IP:$K3S_CLUSTER_PORT --token $K3S_CLIENT_TOKEN"

function error_exit()
{
  local msg="ERROR: $1"
  echo $msg
  exit 126 
}

function has_command()
{
  local result=false
  if $(command -v $1 &> /dev/null)
  then
    result=true
  fi    
  echo $result
}

function make_rc_local()
{
  local file="/etc/rc.local"
  echo "#!/bin/sh -eu" > $file
  echo "" >> $file
  echo $(construct_watchdog_command $install_dir) >> $file
  echo "" >> $file
  echo "exit 0" >> $file
  chmod +x $file
}

function make_watchdog_file()
{
  local file=$1
  echo "#!/usr/bin/env bash" > $file
  echo "" >> $file
  echo 'cd "$(dirname "$0")"' >> $file
  echo "while :" >> $file
  echo "do" >> $file
  echo "  " $2 >> $file
  echo "done" >> $file
}

function make_install_dir()
{
  $(mkdir -p $1)
}

function copy_file_to_install_dir()
{
  $(cp $1 $INSTALL_DIR)
}

function make_temp_dir()
{
  local result=$(mktemp -d -t edge_cloud_deployment_XXXXXXXXXXXXXX)
  echo $result
}

function delete_temp_dir()
{
  sudo rm -r $1
}

function construct_watchdog_command()
{
  local result="$1" 
  echo $result
}

function download_using_curl()
{
  local cmd="curl -sfL https://get.k3s.io > $2"
}

function download_using_wget()
{
  local cmd="wget -q $1 -O $2"
  echo "$cmd"
  $cmd
}

# is this script ran as root?
if [ "$EUID" -ne 0 ]
  then error_exit "you need to run this script as super user"
fi

if $(has_command "wget")
then
  echo "trying to download k3s using wget"
  downloader="download_using_wget"
elif $(has_command "curl")
then
  echo "trying to download k3s using curl"
  downloader="download_using_curl"
else
  error_exit "could not find a proper command to download "
fi

tempdir=$(make_temp_dir)
tmp_k3s="$tempdir/k3s"
tmp_watchdog="$tempdir/$WATCHDOG"

echo $K3S_BASE_URL
echo $tmp_k3s
$downloader $K3S_BASE_URL $tmp_k3s
$(chmod +x $tmp_k3s)
$(make_watchdog_file $tmp_watchdog "\${AGENT_START_CMD}")
$(chmod +x $tmp_watchdog)

$(make_rc_local)
$(make_install_dir $INSTALL_DIR)
$(copy_file_to_install_dir $tmp_k3s)
$(copy_file_to_install_dir $tmp_watchdog)
$(delete_temp_dir $tempdir)
