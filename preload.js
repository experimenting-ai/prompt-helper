window.addEventListener('DOMContentLoaded', () => {
      const inputArea = document.getElementById('inputArea');
      const outputArea = document.getElementById('outputArea');

      inputArea.addEventListener('input', () => {
        const text = inputArea.value;
        const pattern = /\[([^\]]+)\]/g;
        let match;
        let output = text;

        while ((match = pattern.exec(text)) !== null) {
          const keyword = match[1];
          const replacement = \`[\${keyword}](pointer here)\n\n[\${keyword}] :\`;
          output = output.replace(match[0], replacement);
        }

        outputArea.textContent = output;
      });
    });
