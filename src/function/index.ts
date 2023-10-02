import { muiModels } from "../mui-models/models";

interface CurrentComponent {
  component: JSX.Element;
  name: string;
}

interface Model extends CurrentComponent {
  view: string[];
}

const duplicatedComponent: string[] = [];

const findRandomComponent = () => {
  const randomNum = Math.floor(Math.random() * muiModels.length);
  return muiModels[randomNum];
};

const multipleChoice = (currentComponent: CurrentComponent) => {
  const multipleChoiceView = [];
  const mixingRandomNum = Math.floor(Math.random() * 4);
  while (true) {
    const randomNum = Math.floor(Math.random() * muiModels.length);

    if (currentComponent.name !== muiModels[randomNum].name) {
      if (multipleChoiceView.indexOf(muiModels[randomNum].name) === -1)
        multipleChoiceView.push(muiModels[randomNum].name);
    }
    if (multipleChoiceView.length === 3) break;
  }
  multipleChoiceView.splice(mixingRandomNum, 0, currentComponent.name);
  duplicatedComponent.push(currentComponent.name);

  return multipleChoiceView;
};

export const questionModelList = () => {
  const resultList: Model[] = [];
  // const

  for (let i = 0; i < 5; i++) {
    const randomCompoenet = findRandomComponent();
    if (resultList.findIndex((el) => el.name === randomCompoenet.name) === -1) {
      const modelObj = {
        ...randomCompoenet,
        view: multipleChoice(randomCompoenet),
      };

      resultList.push(modelObj);
    } else {
      i--;
    }
  }
  return resultList;
};

console.log(questionModelList());
