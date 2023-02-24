import { CheckCircle } from 'phosphor-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from '../../tooltip';

import * as S from './styles';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  anatomy?: 'contained' | 'outline' | 'text';
  icon?: React.ReactNode;
  text?: string;
  description?: string;
  type?: 'submit' | 'button';
  dataCopy: string;
  rounded?: boolean;
};
/**
 * Botão para copiar uma string específica
 * @param size? sm:20px | md:36px | lg:40px
 * @param anatomy? contained | outline | text
 * @param icon? ReactNode
 * @param text? texto do botão
 * @param description? descrição do popover
 * @param type? submit | button
 * @param dataCopy string que será copiada
 * @param rounded? boolean
 */
export const CopyButton = ({
  size,
  anatomy,
  icon,
  text,
  description,
  type,
  rounded,
  dataCopy,
}: Props) => {
  const [statusCopy, setStatusCopy] = useState(false);
  const handleCopy = () => {
    setStatusCopy(true);
    setTimeout(() => {
      setStatusCopy(false);
    }, 3500);
  };
  return (
    <>
      {description ? (
        <Tooltip
          trigger={
            <div>
              <CopyToClipboard text={dataCopy} onCopy={() => handleCopy()}>
                <S.Wrapper
                  type={type}
                  size={size}
                  anatomy={anatomy}
                  rounded={rounded}
                  onClick={() => handleCopy()}
                  disabled={statusCopy}>
                  {statusCopy ? <CheckCircle /> : icon && icon}
                  {text && text}
                </S.Wrapper>
              </CopyToClipboard>
            </div>
          }>
          {statusCopy ? 'Copiado!' : description}
        </Tooltip>
      ) : (
        <CopyToClipboard text={dataCopy} onCopy={() => handleCopy()}>
          <S.Wrapper
            type={type}
            size={size}
            anatomy={anatomy}
            rounded={rounded}
            onClick={() => handleCopy()}>
            {statusCopy ? <CheckCircle /> : icon && icon}
            {text && text}
          </S.Wrapper>
        </CopyToClipboard>
      )}
    </>
  );
};
