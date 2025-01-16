import projectData from "../data/projects.json";

const projectsInitial = {
  project: projectData.project[0],
};

const projectReducer = (state = projectsInitial, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default projectReducer;
