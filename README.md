# wikom-form

wikom-form extends redux-form, 
implementing some additional functions,
form fields and offers automatic form submitting and check.


## Installation

Add wikom-form to your js project with yarn:

```javascript
yarn add git+https://github.com/Wikom/wikom-form.git
```

or with npm:
```javascript
npm install --save git+https://github.com/Wikom/wikom-form.git
```
Remember to include all dependencies as well. 

### important:
Using wikom-form features such as FormError-Rendering, form-check functions and more,
 don't forget to add formErrorsReducer to your rootReducer:

```javascript
// rootReducer.js
import {formErrorsReducer} from 'wikom-form'

 const rootReducer = combineReducers({
    formErrors: formErrorsReducer,
    // other reducers
});
```

## Form components
Both form components, Form and SimpleForm [...]

### Form
implements and extends reduxForm component, offers automatic form submission and form check

| property (*required)| type | description |
|---|---|---|
| name* | string | identifies form for state keys |
| submitHandler * | function | performs form submission |
| successHandler | function | is called after successful form submission. <br />*default: goBack (react-router-redux)* |
| checkUrl | string/null | form-check route. If set: wikom-form checks form content on change. <br />*default: null, no form check* |



### SimpleForm
implements and extends reduxForm component, offers automatic form check (no submit handling)

| property (*required)| type | description |
|---|---|---|
| name* | string | identifies form for state keys |
| checkUrl | string/null | form-check route. If set: wikom-form checks form content on change. <br />*default: null, no form check* |

### form components usage

```javascript
import React from 'react'
import Form from 'wikom-form'
import {customSubmitHandler} from '/actions/mysubmitHandler'

const Inner = ({form, formValues, initialValues, FieldError, reset, hasErrors, isValidated, submitting}) =>
    <div>
        Do some stuff, put form fields here
        
        <button onClick={reset}>Formular zurücksetzen</button>
        <button type="submit">Formular absenden</button>
    </div>;
    
const MyForm = () =>
    <Form
        name="formName"
        checkUrl="/api-check-url"
        submitHandler={data => customSubmitHandler(data)}>
        <Inner/>
    </Form>;

export default MyForm;
```

#### parameters passed

| name (*only&nbsp;Form)| type | description |
|---|---|---|
| form | string | form name (identifies form for state keys) |
| formValues | object | current form values <br/> as key => value |
| initialValues | object | values loaded <br/> as key => value |
| FieldError | component | renders form error for field passed via name<br /> `<FieldError name="fieldname" />` |
| reset | function | dispatches reset function from *redux-form* |
| hasErrors* | function | returns **true** if validation returns fatal errors |
| isValidated* | function | returns **true** if form has been validated at least once (regardless errors) |
| submitting* | function | returns **true** if submission progress is triggered |


## Server response expected

### for check
server response may have the following type *(JSON)*:

```json
{
    "data": {
        "fatal": {
            "form-field-key-one":
                ["Error message"],
            "form-field-key-two":
                ["Another error message"]
        },
        "errors": {
             // ...
        },
        "warnings": {
             // ...
        },
        "infos": {
             // ...
        }
    }
}
```


## Form field components
wikom-form offers different extended form fields

### SelectInput / VirtualizedSelectInput / Select
implements more complex select components basing on `react-select / react-virtualized-select.`<br />
`Select` renders one of these components, based on number of options submitted.

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| name*                 | string    | input name (identifies input for state keys and form submission) |
| disabled              | boolean   | equals input disabled |
| options*              | array/object | lists selectable options |
| placeholder           | string    | shown when no option is selected |


### SelectClassic
renders classic HTML select Field,
options are converted to `<option>` tags

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| name*                 | string    | input name (identifies input for state keys and form submission) |
| disabled              | boolean   | equals input disabled |
| options*              | array/object | lists selectable options |


### Datepicker
extends `react-datepicker` component

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| name*                 | string    | input name (identifies input for state keys and form submission) |
| disabled              | boolean   | equals input disabled |
| className             | string    | CSS class for displayed input field<br />*default: 'form-control'* |
| dateFormat            | string    | format interpreted by `moment.js`<br />*default: 'DD.MM.YYYY'* |
| openToDate            | string    | latest selectable date, format interpreted by `moment.js` |


### TinyMCEComponent
extends `react-tinymce` component

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| name*                 | string    | input name (identifies input for state keys and form submission) |
| disabled              | boolean   | equals input disabled |
| inline                | boolean   | TinyMCE can run in inline mode. Toolbar is hidden if field is not active in inline mode |


## FieldError component
if form field has errors (result from async validation), FieldError component will display the error message with 
level-depending css-class:

| error level | css class |
|-------------|-----------|
| infos       | form-error text-muted |
| warnings    | form-error text-warning |
| errors      | form-error text-danger |
| fatal       | form-error text-danger form-error--fatal |

## Actions
*wikom-form* comes with different actions, helping you to change form fields and state

### clearFields
dispatched to clear multiple form fields (values)

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| form*                 | string    | name (key) of form you want to clear fields in |
| fields*               | array     | the names (keys) of form fields you want to clear |


### multiChange
dispatched to change multiple form fields (values)

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| form*                 | string    | name (key) of form you want to clear fields in |
| fields*               | object    | key => value of the of form fields you want to change with corresponding values |

### asyncValidate
creates post request to checkUrl given. Also stops previous check request if still running.

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| name*                 | string    | name (key) of form you want to check |
| url*                  | string    | URL for check request |


### handleChange
default action for form state change - triggers *asyncValidate* **with timeout**
(so not every *key down* triggers an online request instantaneously)

| property (*required)  | type      | description |
|-----------------------|-----------|-------------------------------------|
| form*                 | string    | name (key) of form you want to clear fields in |
| fields*               | object    | key => value of the of form fields you want to change with corresponding values |


