import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

import { Select } from 'components';
import ILanguage from 'models/ILanguage';
import { getLanguage } from 'store/reducers/sessionReducer';
import { setLanguage } from 'store/actions';
import { LANGUAGES, LOCALIZATION_PAGES } from 'utils/constants';

const LanguageSelect = () => {
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();
  const { t } = useTranslation(LOCALIZATION_PAGES.NAVIGATION);

  const Toggle = () => {
    const langConfig = LANGUAGES.find(l => l.value === language?.value);

    return (
      <CustomToggle variant="light" block>
        <Icon src={langConfig?.ICON_PATH} alt={t('flag_icon')} />
        <span className="font-weight-bold">{langConfig?.name}</span>
        <Icon src={`${process.env.PUBLIC_URL}/assets/icons/select.svg`} alt={t('select_icon')} />
      </CustomToggle>
    );
  };

  return (
    <LanguageContainer>
      <Select<ILanguage>
        activeItem={language}
        items={LANGUAGES}
        onSelect={lng => dispatch(setLanguage(lng))}
        ToggleElement={Toggle}
      />
    </LanguageContainer>
  );
};

const CustomToggle = styled(Dropdown.Toggle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border: solid 1px #d8dce6;

  :after {
    display: none;
  }
`;

const LanguageContainer = styled.div`
  height: 38px;
  width: 104px;
  align-items: center;
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
`;

export default LanguageSelect;
