function groupById(response) {
  const grouped = {};
  response?.forEach((item) => {
    const { CampusDepartmentID, programmes, ...rest } = item;
    if (grouped[CampusDepartmentID]) {
      grouped[CampusDepartmentID].push(programmes);
    } else {
      grouped[CampusDepartmentID] = [programmes];
    }
  });
  return Object.keys(grouped).map((CampusDepartmentID) => ({
    CampusDepartmentID,
    items: grouped[CampusDepartmentID],
  }));
}

export default groupById;
