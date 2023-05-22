import { useState, useCallback } from "react";

import * as S from "./styled";

const Shipping = () => {
  const [show, setShow] = useState(false);
  const [cepFormatted, setCepFormatted] = useState("");

  const addMaskCep = useCallback(
    (value) => {
      const lastWord = value.slice(-1);

      if (value.length < cepFormatted.length) {
        return value;
      }

      if (!/[0-9]/.test(lastWord)) return value.slice(0, -1);

      if (value.length === 6) {
        const searchValue = new RegExp(`${lastWord}$`);
        return value.replace(searchValue, `-${lastWord}`);
      }

      return value;
    },
    [cepFormatted]
  );

  const handleInputCep = useCallback(
    (event) => {
      const { value } = event.target;

      const valueFormated = addMaskCep(value);
      setCepFormatted(valueFormated);
    },
    [cepFormatted]
  );

  return (
    <>
      <S.LabelShipping>Veja seu frete</S.LabelShipping>

      <S.InputWrapper>
        <input
          placeholder="CEP"
          type="text"
          maxLength={9}
          minLength={9}
          value={cepFormatted}
          onChange={(event) => handleInputCep(event)}
        />

        <S.Button onClick={() => setShow(true)}>Calcular</S.Button>
      </S.InputWrapper>

      <S.ShippingInfo show={show}>
        <span>
          Receber até <b>3 dias</b>
        </span>

        <span>
          <b>R$ 10,00</b>
        </span>
      </S.ShippingInfo>
    </>
  );
};

export default Shipping;
