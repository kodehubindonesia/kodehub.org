import * as React from 'react';

import { Global, css } from '@emotion/core'



const GlobalLayout: React.FunctionComponent = () => {
    return (
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                }
               
            `}
        />
    )
}
export default GlobalLayout

// export function App (props: IAppProps) {
//   return (
//     <div>

//     </div>
//   );
// }
