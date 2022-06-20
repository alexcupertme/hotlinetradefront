// ** Third Party Components
import InputNumber from "rc-input-number";
import { Plus, Minus } from "react-feather";

// ** Reactstrap Imports
import { Label } from "reactstrap";

type TProps = {
  size: string;
  label: string;
  isRoubles?: boolean;
  step?: number;
  nonMinus?: boolean;
};

const NumberInput: React.FC<TProps> = ({
  size,
  label,
  isRoubles,
  step,
  nonMinus
}): JSX.Element => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const format = (num) => {
    return `₽${numberWithCommas(num)}`;
  };

  const parser = (num) => {
    const cells = num.toString().split(" ");
    if (!cells[1]) {
      return num;
    }

    const parsed = cells[1].replace(/,*/g, "");

    return parsed;
  };

  return (
    <>
      {size === "large" ? (
        <div className="d-flex flex-wrap">
          <div className="me-2">
            <Label className="form-label" for="lg-number-input">
              {label}
            </Label>
            <InputNumber
              defaultValue={0}
              parser={parser}
              className="input-lg"
              // @ts-ignore
              formatter={isRoubles ? format : false}
              upHandler={<Plus />}
              id={
                isRoubles
                  ? `${"formatting-number-input"}`
                  : `${"default-number-input"}`
              }
              downHandler={<Minus />}
            />
          </div>
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          <div>
            <Label className="form-label" for="default-number-input">
              {label}
            </Label>
            <InputNumber
              defaultValue={0}
              parser={parser}
              // @ts-ignore
              formatter={isRoubles ? format : false}
              upHandler={<Plus />}
              id={
                isRoubles
                  ? `${"formatting-number-input"}`
                  : `${"default-number-input"}`
              }
              downHandler={<Minus />}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default NumberInput;
