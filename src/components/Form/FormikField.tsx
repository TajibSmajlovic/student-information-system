import { FastField, Field, getIn } from 'formik';
import { useTranslation } from 'react-i18next';

import Input from './Input/Input';

const FormikField = ({
  component: Component = Input,
  fast = false,
  isDisabled = false,
  onChange,
  as,
  ...props
}: any) => {
  // FormikField connects Formik and our form components (textinput, dropdown etc)
  // and provides standardized flow for form field validation.
  // Pick formik field type based on 'fast' flag. Defaults to <Field />
  // NOTE: use FastField only if you know what you are doing
  // about FastField read more here: https://jaredpalmer.com/formik/docs/api/fastfield
  const Base = fast ? FastField : Field;

  const { t } = useTranslation();

  return (
    <Base {...props}>
      {({ form, field }: any) => {
        const { touched, errors } = form;
        const { name } = field;

        let fieldErrors = getIn(touched, name) && getIn(errors, name) ? [getIn(errors, name)] : null;
        let errorMsg = null;

        // translate errors, if any
        if (fieldErrors && fieldErrors.length) {
          fieldErrors = fieldErrors.map(err => {
            err = t(err);

            return err;
          });
          // in case of multiple errors, join them by newline and display in multiple lines.
          // do so until detailed requirements provided
          errorMsg = fieldErrors.join('\r\n');
        }

        // this way we make sure that all onChange handlers are invoked
        // by all handlers formik field onChange
        // and developer custom onChange are meant
        const handleChange = (payload: any) => {
          // In case of payload as an event (fired from HTML inputs etc)
          // let formik handle the onChange automatically.
          // If payload something other (fired from some custom component)
          // we must manually handle this change here so formik knows what is going on
          // if field name is not set, formik will ignore this change
          if (payload?.target && payload?.target?.name) {
            field.onChange(payload);
          } else if (name) {
            form.setFieldValue(name, payload);
            form.setFieldTouched(name, true, false);
          }
          // invoke custom onChange if provided
          if (onChange) onChange(payload);
        };

        const handleBlur = (e: any) => {
          const { onBlur } = props;
          if (e?.persist) {
            e.persist();
            setTimeout(function() {
              if (onBlur) onBlur(e);
              if (field.onBlur) field.onBlur(e);
            }, 0);
          } else {
            setTimeout(function() {
              // assuming e is name
              form.validateField(name);
            }, 0);
          }
        };

        return (
          <Component
            {...field}
            {...props}
            as={as}
            disabled={isDisabled}
            onChange={handleChange}
            onBlur={handleBlur}
            validationMessage={errorMsg}
          />
        );
      }}
    </Base>
  );
};

export default FormikField;
