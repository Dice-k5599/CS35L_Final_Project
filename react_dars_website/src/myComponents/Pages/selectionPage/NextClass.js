import getClassData from "./getClassData.js";

const NextClass = async () => {
  try {
    const classesData = await getClassData();
    const completedClass = classesData.filter(classesData => classesData.completed);
    const leftClass = classesData.filter(classesData => !classesData.completed);

    // If completed is true it is fed into this list
    const completedClassCodes = completedClass.map(classesData => classesData.classCode);

    const recommendedClasses = leftClass.filter(leftClass => {
      // Check if all pre-reqs of the leftClass are met
      const preReqsMet = leftClass.prereq.every(prereq => completedClassCodes.includes(prereq));
      return preReqsMet;
    });

    

    // console.log('Recommended Next Classes:', recommendedClasses);
    return recommendedClasses;
  } catch (error) {
    console.error('Error recommending classes:', error);
    throw error;
  }
};

export default NextClass;
