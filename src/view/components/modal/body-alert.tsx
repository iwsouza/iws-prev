import { WrapperAlert } from './styles';
import { BodyProps } from './types';

export const BodyAlert = ({
  text,
  description,
  msgDefaultError = false,
}: BodyProps) => {
  return (
    <WrapperAlert>
      <h3 className={!description && !msgDefaultError ? 'rem-margin' : ''}>
        {text}
      </h3>
      {!!description && description}
      {!!msgDefaultError && <p>Tente novamente em alguns minutos.</p>}
    </WrapperAlert>
  );
};
