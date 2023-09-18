import { muiModels } from "../mui-models/models";

interface CurrentComponent {
  component: JSX.Element;
  name: string;
}

export const findRandomComponent = () => {
  const randomNum = Math.floor(Math.random() * muiModels.length);
  return muiModels[randomNum];
};

export const multipleChoice = (currentComponent: CurrentComponent) => {
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
  return multipleChoiceView;
};
