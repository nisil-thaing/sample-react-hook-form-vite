import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormCheck, FormCheckProps } from "react-bootstrap";

export type RadioProps = FormCheckProps & {};

const RadioRenderer: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  props,
  ref,
) => <FormCheck ref={ref} {...props} type="radio" />;

const Radio = forwardRef<HTMLInputElement, RadioProps>(RadioRenderer);

export default Radio;
