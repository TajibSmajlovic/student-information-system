import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import { Tab, Tabs, ProfessorsManagement, StudentsManagement, UnderConstruction } from 'components';
import { LOCALIZATION_PAGES } from 'utils/constants';

const EVENT_KEYS = {
  PROFESSORS_MANAGEMENT: 'PROFESSORS_MANAGEMENT',
  STUDENTS_MANAGEMENT: 'STUDENTS_MANAGEMENT',
  OTHERS_MANAGEMENT: 'OTHERS_MANAGEMENT',
};

const UsersManagement = () => {
  const { t } = useTranslation([LOCALIZATION_PAGES.USERS_MANAGEMENT, LOCALIZATION_PAGES.COMMON]);
  const [activeTab, setActiveTab] = useState<string>(EVENT_KEYS.PROFESSORS_MANAGEMENT);
  const [visitedTabs, setVisitedTabs] = useState<string[]>([activeTab]);

  const onHandleTabChange = (eventKey: string) => {
    setActiveTab(eventKey);
    if (!visitedTabs.includes(eventKey)) setVisitedTabs(prevState => [...prevState, eventKey]);
  };

  return (
    <Container fluid>
      <Tabs activeKey={activeTab} onSelect={onHandleTabChange}>
        <Tab eventKey={EVENT_KEYS.PROFESSORS_MANAGEMENT} title={t('professors')}>
          {visitedTabs.includes(EVENT_KEYS.PROFESSORS_MANAGEMENT) && <ProfessorsManagement />}
        </Tab>
        <Tab eventKey={EVENT_KEYS.STUDENTS_MANAGEMENT} title={t('students')}>
          {visitedTabs.includes(EVENT_KEYS.STUDENTS_MANAGEMENT) && <StudentsManagement />}
        </Tab>
        <Tab eventKey={EVENT_KEYS.OTHERS_MANAGEMENT} title={t('others')} disabled>
          {visitedTabs.includes(EVENT_KEYS.OTHERS_MANAGEMENT) && <UnderConstruction />}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default UsersManagement;
