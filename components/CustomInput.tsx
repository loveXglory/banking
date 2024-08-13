import { Control, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface CustomInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ control, name, label, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <label htmlFor={field.name} className="form-label">
            {label}
          </label>
          <Input 
            placeholder={placeholder}
            className="input-class"
            type={name === 'password' ? 'password' : 'text'}
            id={field.name}
            aria-describedby={`${field.name}-description`}
            {...field}
            value={field.value || ''}  // Ensure controlled input
          />
        </div>
      )}
    />
  );
};

export default CustomInput;
