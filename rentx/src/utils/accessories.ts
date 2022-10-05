import SpeedSvg from "../assets/speed.svg";
import AcelerationIcon from "../assets/acceleration.svg";
import ForceIcon from "../assets/force.svg";
import GasolineIcon from "../assets/gasoline.svg";
import EnergyIcon from "../assets/energy.svg";
import HybridIcon from "../assets/hybrid.svg";
import ExchangeIcon from "../assets/exchange.svg";
import PeopleIcon from "../assets/people.svg";

export const getAccessories = (accessory: string) => {
  const types = {
    speed: SpeedSvg,
    acceleration: AcelerationIcon,
    turning_diameter: ForceIcon,
    gasoline_motor: GasolineIcon,
    electric_motor: EnergyIcon,
    hybrid_motor: HybridIcon,
    exchange: ExchangeIcon,
    seats: PeopleIcon,
  };

  return types[accessory];
};
