import blankAvatar from '../assets/avatar-blank.png';

const COMMENTS = [
  {
    id: 1,
    comment: 'whoa!',
    user: 'Josh',
    image: blankAvatar,
    replies: [
      {
        id: 1,
        comment: 'yup!',
        user: 'Josh',
        image: blankAvatar,
      },
    ]
  },
  {
    id: 2,
    comment: 'ok!',
    user: 'Sam',
    image: blankAvatar,
  },
  {
    id: 3,
    comment: 'that!',
    user: 'Chris',
    image: blankAvatar,
    replies: [
      {
        id: 1,
        comment: 'really?!',
        user: 'Sam',
        image: blankAvatar,
      },
      {
        id: 2,
        comment: 'exactly!',
        user: 'Chris',
        image: blankAvatar,
      },
    ]
  },
];

export default COMMENTS;