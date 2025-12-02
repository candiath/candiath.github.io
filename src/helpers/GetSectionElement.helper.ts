export const GetSectionElement = (id: string): HTMLElement | null => {

  let element = document.getElementById(id);
  if (element) return element;

  const allSections = document.querySelectorAll("[data-section-aliases]");
  for (const section of allSections) {
    const aliases =
      section.getAttribute("data-section-aliases")?.split(",") || [];
    if (aliases.includes(id)) {
      return section as HTMLElement;
    }
  }
  return null;
};