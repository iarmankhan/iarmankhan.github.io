import React from "react";
import {SeparatorContainer} from "./General-Components.styles";

export const Separator = ({mw}) => {
    return (
        <SeparatorContainer mw={mw}>
          <div className='separator'/>
        </SeparatorContainer>
    )
};