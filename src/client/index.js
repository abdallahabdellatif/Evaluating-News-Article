//import js and css
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import { checkInput } from './js/validateInput'
import { handleSubmit } from './js/formHandler'

console.log(checkInput);

export{
    checkInput,
    handleSubmit
}
