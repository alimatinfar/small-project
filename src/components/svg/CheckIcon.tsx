import React from "react";

const CheckIcon:React.FC<{className?:string}> = function ({className}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className||"fill-black"}>
            <g id="vuesax_outline_tick-square" data-name="vuesax/outline/tick-square" transform="translate(-748 -252)">
                <g id="tick-square">
                    <path id="Vector" d="M13.75,21.5h-6C2.32,21.5,0,19.18,0,13.75v-6C0,2.32,2.32,0,7.75,0h6c5.43,0,7.75,2.32,7.75,7.75v6C21.5,19.18,19.18,21.5,13.75,21.5Zm-6-20C3.14,1.5,1.5,3.14,1.5,7.75v6C1.5,18.36,3.14,20,7.75,20h6C18.36,20,20,18.36,20,13.75v-6c0-4.61-1.64-6.25-6.25-6.25Z" transform="translate(749.25 253.25)" fill="none"/>
                    <path id="Vector-2"  d="M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z" transform="translate(755.003 260.413)" fill="current"/>
                    <path id="Vector-3"  d="M0,0H24V24H0Z" transform="translate(748 252)" fill="none" opacity="0"/>
                </g>
            </g>
        </svg>


    )
}
export default CheckIcon