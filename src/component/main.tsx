// @ts-nocheck
import StatsHorizontal from "../@core/components/widgets/stats/StatsHorizontal";
import { Cpu, Users } from "react-feather";
import { Button } from "reactstrap";
import { RippleButton, ButtonNew } from "../@core/components/ripple-button/";

const Component = () => {
  return (
    <div>
      <ButtonNew color='primary'>Primary</ButtonNew>
      <ButtonNew color='secondary'>Secondary</ButtonNew>
      <ButtonNew color='success'>Success</ButtonNew>
      <ButtonNew color='danger'>Danger</ButtonNew>
      <ButtonNew color='warning'>Warning</ButtonNew>
      <ButtonNew color='info'>Info</ButtonNew>
      <ButtonNew color='dark'>Dark</ButtonNew>
    </div>
  );
};

export default Component;
