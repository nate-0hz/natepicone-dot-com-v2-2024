

export const techStyles = {
  javascript: {
    name: 'JavaScript',
    tagColour: 'bg-[#F7DF1E]',
    textColour: 'text-slate-950'
  },
  react: {
    name: 'ReactJS',
    tagColour: 'bg-[#61dbfb]',
    textColour: 'text-slate-50'
  },
  node: {
    name: 'Node.js',
    tagColour: 'bg-[#66cc33]',
    textColour: 'text-slate-50'
  },
  express: {
    name: 'Express.js',
    tagColour: 'bg-[#F7DF1E]',
    textColour: 'text-slate-950'
  },
  mongodb: {
    name: 'Mongo DB',
    tagColour: 'bg-[#023430]',
    textColour: 'text-slate-50'
  },
  postgresql: {
    name: 'PostgreSQL',
    tagColour: 'bg-[#336791]',
    textColour: 'text-slate-50'
  },
  python: {
    name: 'Python',
    tagColour: 'bg-[#4584b6]',
    textColour: 'text-slate-50'
  },
  flask: {
    name: 'Flask',
    tagColour: 'bg-slate-700',
    textColor: 'text-slate-50'
  },
  mui: {
    name: 'MUI',
    tagColour: 'bg-[#4584b6]',
    textColour: 'text-slate-50'
  },
  tailwind: {
    name: 'Tailwind',
    tagColour: 'bg-sky-500',
    textColour: 'text-slate-50'
  },
}

export default function Tags({ techName }) {
  if (!techStyles[techName]) {
    console.error(`Tech name "${techName}" does not exist in techStyles.`);
    return null;
  }

  const { name, tagColour, textColour } = techStyles[techName];

  return(
    <span className={`inline-block rounded-full px-2 py-0.25 text-xs font-bold uppercase ${textColour} ${tagColour}`}>
      {name}
    </span>
  )
}