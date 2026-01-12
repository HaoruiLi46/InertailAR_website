function getBibtexTextArea() {
  return document.getElementById("bibtex");
}

async function copyBibtex() {
  const textArea = getBibtexTextArea();
  if (!textArea) return;

  const text = textArea.value;
  const button = document.getElementById("copy-bibtex");

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }

    if (button) {
      const original = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = original;
      }, 1200);
    }
  } catch {
    if (button) button.textContent = "Copy failed";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("copy-bibtex");
  if (!button) return;
  button.addEventListener("click", () => {
    void copyBibtex();
  });
});

