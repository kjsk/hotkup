import React from "react";
import { IlluminatingSection } from "./styles";
import img from "../../../images/landing/hotkup.png";

export const Illuminating = () => {
  <IlluminatingSection>
    <div
      id="IlluminatingSectionContainer"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h1>Illuminating dark data</h1>
      <h2>
        Dark data is the 60% of unanalyzed data companies possess. At HotKup we
        transform unused data into valuable business insights.
      </h2>
      <img src={img} alt="img" />
      <p>
        Join dozens of global teams using HotKup to unite their workforce and
        get things done.
      </p>
    </div>
  </IlluminatingSection>;
};
