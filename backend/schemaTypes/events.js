const events = {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'eventLink',
      title: 'Event Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
     type:'array',
     of: [
       {
         name:'tag',
         title:'Tag',
         type:'string'
       }
     ]
    },
  ],
};

export default events;