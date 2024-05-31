import React, { Dispatch, SetStateAction } from 'react'
import '../styles/Formats.css'


type FormatText = string;

// Тип объекта с ключами и значениями типа FormatText
type FormatTexts = {
    [key: string]: FormatText;
};
const Formats:React.FC<{format: string, setFormat: Dispatch<SetStateAction<string>>}> = ({format, setFormat}) => {
   

    const formatTexts:FormatTexts = {
        pop: 'POP advertising format is used to display advertising windows that appear in front of the user above or behind the content of the web page. This type of advertising can be presented as a pop-up window, a pop-under window, or similar forms. It is often used to draw attention to specific products, services, or promotions.',
        push: 'Push format is a method of sending notifications or advertising messages to mobile devices or computers through applications or web browsers. Users can receive these messages even without actively using the app or website. This form of advertising enables reaching the audience with notifications about products, promotions, news, and other important messages.',
        inpage: `Inpage is a type of advertisement that is integrated directly into the content of a web page. Typically, this can be text or graphical ads displayed within the page's content, without pop-ups or redirects. This format provides a more natural and non-intrusive interaction with users..`,
        native: `Native is a way of presenting ads that seamlessly integrates into the surrounding content, matching its style and context. This type of advertising doesn't look like typical ads and often resembles the rest of the page's content, allowing it to be more effective and unobtrusive.`
    };
  return (
    <div className='formats'>
        <h1 className='formats__h1'>Formats</h1>
        <div className="formats__btns">
            <button className={ format === 'pop'? 'format-select': ""} onClick={() => setFormat('pop')}>Pop</button>
            <button className={ format === 'push'? 'format-select': ""} onClick={() => setFormat('push')}>Push</button>
            <button className={ format === 'inpage'? 'format-select': ""} onClick={() => setFormat('inpage')}>Inpage</button>
            <button className={ format === 'native'? 'format-select': ""} onClick={() => setFormat('native')}>Native</button>
        </div>
        <div className="format__format">
            <p className='format__title'>
                {formatTexts[format]}
            </p>
        </div>
    </div>
  )
}

export default Formats