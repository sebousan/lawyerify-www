import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { date } from '../partials/date.js'
import { description } from '../partials/description.js'
import { image } from '../partials/image.js'
import { title } from '../partials/title.js'
import { hero } from '../blocks/hero.js'
import { blocks } from '../blocks/blocks.js'

const casestudies = {
    name: 'casestudies',
    label: 'Cas d’études',
    label_singular: 'Cas d’étude',
    folder: 'content/casestudies',
    create: true,

    editor: { preview: false },
    // preview_path: "/projects/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'index', value: false },

    fields: [
        { name: 'layout', widget: 'hidden', default: 'blocks' },
        index,
        draft,
        date,
        title,
        description,
        image,
        hero,
        blocks
    ]

}

export default casestudies