import { Check, CircleNotch, Trash, WarningOctagon } from 'phosphor-react';
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Button } from '../ui/buttons/button';
import { BodyAlert } from './body-alert';
import * as S from './styles';
import { ModalHandles, Props } from './types';

const icons = {
  error: <WarningOctagon />,
  delete: <Trash />,
  warning: <WarningOctagon />,
  success: <Check />,
  loading: <CircleNotch />,
};

const Modal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  {
    title,
    onClose,
    size = 'xs',
    close = true,
    actionCancel,
    actionConfirm,
    actions = true,
    cancel = true,
    confirm = true,
    type = 'scrollable',
    titleCancel = 'Cancelar',
    keepConfirmation = false,
    titleConfirm = 'Confirmar',
    redoAction,
  },
  ref,
) => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [children, setChildren] = useState<ReactNode | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const data = document.querySelector(
        '[data-radix-portal]',
      ) as HTMLDivElement;

      const exit = data ? data.contains(event.target as Node) : false;

      if (
        close &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        (event.target as Element).tagName !== 'HTML' &&
        !exit
      ) {
        setOpen(false);

        if (onClose) {
          onClose();
        }
      }
    },
    [close, onClose],
  );

  const cancelModal = useCallback(() => {
    if (actionCancel) {
      actionCancel();
    }

    setOpen(false);
  }, [actionCancel]);

  const confirmationModal = useCallback(() => {
    if (actionConfirm) {
      actionConfirm();
    }

    if (!keepConfirmation) {
      setOpen(false);
    }
  }, [actionConfirm, keepConfirmation]);

  const closeButton = useCallback(() => {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (document) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useImperativeHandle(ref, () => {
    return {
      open: (children: ReactNode) => {
        setChildren(children);
        setOpen(true);
      },
      close: () => setOpen(false),
    };
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);
  if (!open) {
    return null;
  }
  return (
    <S.Background>
      <S.Wrapper ref={modalRef} type={type} size={size}>
        <S.Header className={!close && !title ? 'clean' : ''}>
          <h1>{title}</h1>
          {close && <S.ButtonClose type="button" onClick={closeButton} />}
        </S.Header>
        {type === 'scrollable' && <S.Body>{children}</S.Body>}
        {type !== 'scrollable' && (
          <S.Container>
            <S.BarIcon type={type}>
              <S.Icon type={type}>{icons[type]}</S.Icon>
            </S.BarIcon>
            <S.Body>{children}</S.Body>
          </S.Container>
        )}
        {redoAction && !actions && (
          <S.Footer>
            <Button
              type="submit"
              title={redoAction}
              outline
              color={type}
              onClick={() => confirmationModal()}
            />
          </S.Footer>
        )}
        {actions && (
          <S.Footer>
            {cancel && (
              <Button
                type="submit"
                title={titleCancel}
                outline
                color={type}
                onClick={() => cancelModal()}
              />
            )}
            {confirm && (
              <Button
                type="submit"
                title={titleConfirm}
                color={type}
                onClick={() => confirmationModal()}
              />
            )}
          </S.Footer>
        )}
      </S.Wrapper>
    </S.Background>
  );
};

export { BodyAlert };
export type { ModalHandles };

export default forwardRef(Modal);
