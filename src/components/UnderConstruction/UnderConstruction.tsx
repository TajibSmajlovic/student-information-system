import { useTranslation } from 'react-i18next';

import { Image, Message, Wrapper } from './UnderConstruction.styles';
import { LOCALIZATION_PAGES } from 'utils/constants';

const UnderConstruction = () => {
  const { t } = useTranslation(LOCALIZATION_PAGES.COMMON);

  return (
    <Wrapper>
      <Image src={`${process.env.PUBLIC_URL}/assets/icons/monitoring.svg`} alt="" />
      <Message>{t('under_construction')}</Message>
    </Wrapper>
  );
};

export default UnderConstruction;
