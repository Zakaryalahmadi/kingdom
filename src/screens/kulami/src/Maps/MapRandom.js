import Piece from '../Board/components/Piece';
import Carre from '../Board/components/Carre';
import Duo from '../Board/components/Duo';
import Trio from '../Board/components/Trio';

export const Maps = [
        [   <Carre x={670} y={70} class= {0} type={4}/>,
            <Carre x={510} y={150} class={1} type={4}/>,
            <Duo x={670} y={230} class={2} type={2} position='h'/>,
            <Trio x={830} y={150} class={3} type={3} position='v'/>,
            <Trio x={910} y={310} class={4} type={3} position='h'/>,
            <Trio x={510} y={310} class={5} type={3} position='v'/>,
            <Piece x={350} y={230} class={6} type={6} position='v'/>,
            <Carre x={510} y={550} class={7} type={4}/>,
            <Duo x={350} y={470} class={8} type={2} position='h'/>,
            <Piece x={590} y={310} class={9} type={6} position='h'/>,
            <Trio x={590} y={470} class={10} type={3} position='h'/>,
            <Piece x={830} y={390} class={11} type={6} position='h'/>,
            <Duo x={670} y={550} class={12} type={2} position='v'/>,
            <Piece x={910} y={550} class={13} type={6} position='v'/>,
            <Carre x={750} y={550} class={14} type={4}/>,
            <Duo x={590} y={710} class={15} type={2} position='h'/>,
            <Carre x={750} y={710} class={16} type={4}/>
        ],
        [   <Carre x={350} y={70} class= {0} type={4}/>,
            <Carre x={510} y={150} class={1} type={4}/>,
            <Carre x={510} y={550} class={2} type={4}/>,
            <Carre x={750} y={550} class={3} type={4}/>,
            <Carre x={750} y={710} class={4} type={4}/>,
    
            <Duo x={510} y={70} class={5} type={2} position='h'/>,
            <Duo x={910} y={790} class={6} type={2} position='h'/>,
            <Duo x={670} y={550} class={7} type={2} position='v'/>,
            <Duo x={590} y={710} class={8} type={2} position='h'/>,
    
            <Trio x={670} y={70} class={9} type={3} position='v'/>,
            <Trio x={830} y={310} class={10} type={3} position='h'/>,
            <Trio x={510} y={310} class={11} type={3} position='v'/>,
            <Trio x={590} y={470} class={12} type={3} position='h'/>,
    
            <Piece x={350} y={230} class={13} type={6} position='v'/>,
            <Piece x={590} y={310} class={14} type={6} position='h'/>,
            <Piece x={830} y={390} class={15} type={6} position='h'/>,
            <Piece x={910} y={550} class={16} type={6} position='v'/>
        ],
        [
            <Carre x={350} y={70} class= {0} type={4}/>,
            <Carre x={510} y={150} class={1} type={4}/>,
            <Carre x={510} y={550} class={2} type={4}/>,
            <Carre x={750} y={550} class={3} type={4}/>,
            <Carre x={750} y={710} class={4} type={4}/>,

            <Duo x={510} y={70} class={5} type={2} position='h'/>,
            <Duo x={910} y={790} class={6} type={2} position='h'/>,
            <Duo x={670} y={550} class={7} type={2} position='v'/>,
            <Duo x={590} y={710} class={8} type={2} position='h'/>,

            <Trio x={670} y={70} class={9} type={3} position='v'/>,
            <Trio x={830} y={310} class={10} type={3} position='h'/>,
            <Trio x={510} y={310} class={11} type={3} position='v'/>,
            <Trio x={590} y={470} class={12} type={3} position='h'/>,

            <Piece x={350} y={230} class={13} type={6} position='v'/>,
            <Piece x={590} y={310} class={14} type={6} position='h'/>,
            <Piece x={830} y={390} class={15} type={6} position='h'/>,
            <Piece x={910} y={550} class={16} type={6} position='v'/>
        ],
        [
            <Carre x={750} y={70} class= {0} type={4}/>,
            <Carre x={510} y={230} class={1} type={4}/>,
            <Carre x={670} y={390} class={2} type={4}/>,
            <Carre x={830} y={550} class={3} type={4}/>,
            <Carre x={590} y={710} class={4} type={4}/>,

            <Duo x={670} y={310} class={5} type={2} position='h'/>,
            <Duo x={670} y={550} class={6} type={2} position='h'/>,
            <Duo x={430} y={470} class={7} type={2} position='v'/>,
            <Duo x={990} y={310} class={8} type={2} position='v'/>,

            <Trio x={670} y={230} class={9} type={3} position='h'/>,
            <Trio x={590} y={630} class={10} type={3} position='h'/>,
            <Trio x={430} y={230} class={11} type={3} position='v'/>,
            <Trio x={990} y={470} class={12} type={3} position='v'/>,

            <Piece x={510} y={70} class={13} type={6} position='h'/>,
            <Piece x={510} y={390} class={14} type={6} position='v'/>,
            <Piece x={830} y={310} class={15} type={6} position='v'/>,
            <Piece x={750} y={710} class={16} type={6} position='h'/>
        ],
        [
            <Carre x={350} y={70} class= {0} type={4}/>,
            <Carre x={510} y={230} class={1} type={4}/>,
            <Carre x={670} y={390} class={2} type={4}/>,
            <Carre x={830} y={550} class={3} type={4}/>,
            <Carre x={990} y={710} class={4} type={4}/>,

            <Duo x={670} y={310} class={5} type={2} position='h'/>,
            <Duo x={670} y={550} class={6} type={2} position='h'/>,
            <Duo x={510} y={630} class={7} type={2} position='v'/>,
            <Duo x={910} y={150} class={8} type={2} position='v'/>,

            <Trio x={670} y={230} class={9} type={3} position='h'/>,
            <Trio x={590} y={630} class={10} type={3} position='h'/>,
            <Trio x={430} y={230} class={11} type={3} position='v'/>,
            <Trio x={990} y={470} class={12} type={3} position='v'/>,

            <Piece x={510} y={70} class={13} type={6} position='h'/>,
            <Piece x={510} y={390} class={14} type={6} position='v'/>,
            <Piece x={830} y={310} class={15} type={6} position='v'/>,
            <Piece x={750} y={710} class={16} type={6} position='h'/>
        ]

]