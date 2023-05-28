# text-tree

### Description
Generates easy to follow text trees for use in terminals and other text based outputs.
This project was inspired by [dlic/text-treeview](https://github.com/dlid/text-treeview/tree/master) but I needed a functional TS compatible module.

### Example output
```
├─ Girls
│  ├─ Anna
│  ├─ Lana
│  │  ├─ Branda
│  │  └─ Mai
│  │     └─ Therisa
│  │        └─ Tamala
│  ├─ Lisa
│  └─ Bea
└─ Boys
   ├─ Kalle
   ├─ Åre
   └─ Asgar
```
The input for that object looks as follows
```
[
  {
    text: 'Girls',
    children: [
      {
        text: 'Anna'
      },
      {
        text: 'Lana',
        children: [
          {
            text: 'Branda',
          },
          {
            text: 'Mai',
            children: [
              {
                text: 'Theresia',
                children: [
                  {
                    text: 'Tamala'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Lisa'
      },
      {
        text: 'Bea'
      }
    ]
  },
  {
    text: 'Boys',
    children: [
      {
        text: 'Kalle'
      },
      {
        text: 'Åre'
      },
      {
        text: 'Asgar'
      }
    ]
  }
]
```

### Installation
Installation can simply be done via npm
`npm i simple-text-tree`

### Usage
A basic example looks as follows
```ts
import { treeView } from 'simple-text-tree';

const sample = [
    {
        text: 'Node1'
        children: [
            {
                text: 'inner Node2'
            }
        ]
    }
];

console.log(treeView(sample));
```
which prints the following
```
└─ Node1
   └─ inner Node2
```

### Tiny documentation
The function `treeView` takes 1 required and 2 optional arguments.

#### tree: treeNode[] (required)
This is the only required argument and consists of an array of treeNode elements.

#### indent: string = '' (optional)
This is the indent argument and can be used to add a custom indent yourself that gets added infront of the tree.

#### showLines: boolean = true (optional)
This can be used to disable drawing the tree lines which causes the tree to be made up of pure whitespace indents.

### License
Apache 2
