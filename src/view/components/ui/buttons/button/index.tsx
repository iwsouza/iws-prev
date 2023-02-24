import { TypeModal } from '../../../modal/types';
import { Tooltip } from '../../tooltip';
import * as S from './styles';

export type Props = {
  variant?: 'outline' | 'normal';
  icon?: React.ReactNode;
  title?: string;
  height?: number;
  outline?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  description?: string;
  color?:
    | 'primary'
    | 'error'
    | 'delete'
    | 'warning'
    | 'success'
    | 'loading'
    | 'white'
    | undefined
    | TypeModal;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  vibrate?: boolean;
  count?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

/**
 * Modelo de botão padrão para uso geral
 * @param title string;
 * @param icon React.ReactNode
 * @param height number;
 * @param outline boolean;
 * @param type 'button' | 'submit' | 'reset'
 * @param description descrição do popover do botão
 * @param color 'primary' | 'error' | 'warning' | 'success'
 * @param vibrate boolean
 * @param count number: circulo com contagem de alguma informação
 */
export const Button = ({
  icon,
  title,
  height = 36,
  variant,
  outline = false,
  description,
  color = 'primary',
  disabled,
  type = 'button',
  rounded = false,
  onClick,
  vibrate,
  count,
  size,
}: Props) => {
  return (
    <>
      {!description && (
        <S.Wrapper
          height={height}
          color={color}
          rounded={rounded}
          outline={variant === 'outline' || outline}
          disabled={disabled ?? false}
          type={type}
          vibrate={vibrate}
          size={size ?? 'xs'}
          onClick={onClick}>
          {!rounded && icon}
          {!rounded && title}
          {rounded && <i>{icon}</i>}
          {count && <span>{count}</span>}
        </S.Wrapper>
      )}
      {description && (
        <Tooltip
          trigger={
            <S.Wrapper
              height={height}
              color={color}
              rounded={rounded}
              outline={variant === 'outline' || outline}
              disabled={disabled ?? false}
              type={type}
              vibrate={vibrate}
              size={size ?? 'xs'}
              onClick={onClick}>
              {!rounded && icon}
              {!rounded && title}
              {rounded && <i>{icon}</i>}
              {count && <span>{count}</span>}
            </S.Wrapper>
          }>
          <p>{description}</p>
        </Tooltip>
      )}
    </>
  );
};
