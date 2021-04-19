import { ToggleIconWrapper, FaEyeIcon, FaEyeSlashIcon } from './PasswordToggle.styles';

const PasswordToggle = ({ type, setInputType }: { type: string; setInputType: (input: string) => void }) => (
  <ToggleIconWrapper>
    {type === 'password' && <FaEyeIcon className="text-secondary" onClick={() => setInputType('text')} />}
    {type === 'text' && <FaEyeSlashIcon className="text-secondary" onClick={() => setInputType('password')} />}
  </ToggleIconWrapper>
);

export default PasswordToggle;
