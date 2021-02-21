import React, { useEffect } from "react";
import styled from "styled-components";

const ServicesServerContainer = styled.div`
  padding-top: 6rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  opacity: 0.15;
  filter: blur(30px);
  transform: translate(10px, 10px);
`;

type BodyShapeProps = {
  top: number;
};

const BodyShape = styled.div`
  position: absolute;
  top: ${(props: BodyShapeProps) => props.top + "px"};
  left: 50%;
  width: 140px;
  height: 100px;
  border-radius: 10px;
  transform: rotate(25deg) skewX(-45deg) translateX(-50%);
  background-color: black;
`;

const ServerAsset = () => {
  const bigSectionLayerCount: number = 60;
  const middleSectionLayerCount: number = 21;

  let bigSectionLayers: number[] = [];
  let middleSectionLayers: number[] = [];

  useEffect(() => {
    for (var i = 0; i < bigSectionLayerCount; i++) bigSectionLayers.push(i);

    for (var i = 0; i < middleSectionLayerCount; i++)
      middleSectionLayers.push(i);
  }, []);

  return (
    <Blur>
      {bigSectionLayers.map((layer: number) => (
        <BodyShape top={layer} />
      ))}
    </Blur>
  );

  //     return (

  // <div class="services-server__container">
  //   <div class="server__container">
  //       {/* Bottom Layer */}
  //     <div class="bottom-section__container">

  // {/* Signal */}
  //       <div class="signal__animation1">
  //         <div class="body__shape signal"></div>
  //       </div>
  //       <div class="signal__animation2">
  //         <div class="body__shape signal"></div>
  //       </div>
  //       <div class="signal__animation3">
  //         <div class="body__shape signal"></div>
  //       </div>
  //       <div class="signal__animation4">
  //         <div class="body__shape signal"></div>
  //       </div>

  // {/* Body */}
  //       <div *ngFor="let layer of bigSectionLayers">
  //         <div
  //           class="body__shape body__main"
  //           [ngStyle]="{ 'top.px': layer }"
  //         ></div>
  //       </div>
  //       <div class="body__shape body__top"></div>
  //       <div class="left__container">
  //         <div class="extractor-fan extractor-fan__bottom"></div>
  //       </div>

  // {/* Decorations */}
  //       <div class="right__container">
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light"></div>
  //           </div>
  //         </div>
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //           </div>
  //         </div>
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light light-white light-white__animation3"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-blue light-blue__animation4"></div>
  //           </div>
  //         </div>
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-blue light-blue__animation1"></div>
  //             <div class="panel__light light-white light-white__animation2"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-white light-white__animation5"></div>
  //             <div class="panel__light"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  // // Third Layer
  //     <div class="third-section__container">
  //         {/* Drop Shadow */}
  //       <div class="blur">
  //         <div *ngFor="let layer of middleSectionLayers">
  //           <div
  //             class="body__shape drop-shadow"
  //             [ngStyle]="{ 'top.px': layer }"
  //           ></div>
  //         </div>
  //       </div>

  // // Body
  //       <div *ngFor="let layer of middleSectionLayers">
  //         <div
  //           class="body__shape body__main"
  //           [ngStyle]="{ 'top.px': layer }"
  //         ></div>
  //       </div>
  //       <div class="body__shape body__top"></div>

  //     //   Decorations
  //       <div class="right__container less-padding">
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-blue light-blue__animation1"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     // Second Layer
  //     <div class="second-section__container">
  //         {/* Drop Shadow */}
  //       <div class="blur">
  //         <div *ngFor="let layer of middleSectionLayers">
  //           <div
  //             class="body__shape drop-shadow"
  //             [ngStyle]="{ 'top.px': layer }"
  //           ></div>
  //         </div>
  //       </div>

  // // Body
  //       <div *ngFor="let layer of middleSectionLayers">
  //         <div
  //           class="body__shape body__main"
  //           [ngStyle]="{ 'top.px': layer }"
  //         ></div>
  //       </div>
  //       <div class="body__shape body__top"></div>

  //       <!-- Decorations -->
  //       <div class="right__container less-padding">
  //         <div class="panel__column">
  //           <div class="panel__row">
  //             <div class="panel__light light-white light-white__animation4"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light light-blue light-blue__animation5"></div>
  //             <div class="panel__light light-grey"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light"></div>
  //             <div class="panel__light light-grey"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <!-- Top Layer -->
  //     <!-- Drop Shadow -->
  //     <div class="blur">
  //       <div *ngFor="let layer of bigSectionLayers">
  //         <div
  //           class="body__shape drop-shadow"
  //           [ngStyle]="{ 'top.px': layer }"
  //         ></div>
  //       </div>
  //     </div>

  //     <!-- Body -->
  //     <div *ngFor="let layer of bigSectionLayers">
  //       <div class="body__shape body__main" [ngStyle]="{ 'top.px': layer }"></div>
  //     </div>
  //     <div class="body__shape body__top"></div>

  //     <!-- Decorations -->
  //     <div class="left__container">
  //       <div class="extractor-fan extractor-fan__top"></div>
  //     </div>
  //     <div class="right__container">
  //       <div class="panel__column">
  //         <div class="panel__row">
  //           <div class="panel__light light-blue light-blue__animation1"></div>
  //           <div class="panel__light light-grey"></div>
  //           <div class="panel__light light-white light-white__animation4"></div>
  //           <div class="panel__light light-white light-white__animation3"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light light-white light-white__animation2"></div>
  //         </div>
  //       </div>
  //       <div class="panel__column">
  //         <div class="panel__row">
  //           <div class="panel__light"></div>
  //           <div class="panel__light light-grey"></div>
  //           <div class="panel__light light-grey"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light light-grey"></div>
  //           <div class="panel__light"></div>
  //         </div>
  //       </div>
  //       <div class="panel__column">
  //         <div class="panel__row">
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light light-blue light-blue__animation3"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //         </div>
  //       </div>
  //       <div class="panel__column">
  //         <div class="panel__row">
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //           <div class="panel__light"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  //     );
};

export default ServerAsset;
