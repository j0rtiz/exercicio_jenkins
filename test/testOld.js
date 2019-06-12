const { Builder, By } = require('selenium-webdriver');
const page = `${__dirname}\\..\\src\\index.html`;

(async function testTitulo () {
  const driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get(page);
    await driver.getTitle()
      .then(titulo => {
        if (titulo === 'Calculadora') {
          console.log('TÍTULO: OK!');
        } else {
          console.log('TÍTULO: ERRADO!');
        }
      })
      .catch(err => {
        console.log('Erro: ' + err);
      });
  } catch (err) {
    console.log('Erro: ' + err);
  } finally {
    await driver.quit();
  }
})();

(async function testSoma () {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(page);
    const a = await driver.findElement(By.id('a'));
    const b = await driver.findElement(By.id('b'));
    await a.sendKeys(8);
    await b.sendKeys(5);
    await driver.findElement(By.id('botao_somar')).click();
    await driver.findElement(By.id('resultado')).getText()
      .then(resultado => {
        if (resultado === 'Resultado da soma: 13') {
          console.log('SOMA: OK!');
        } else {
          console.log('SOMA: ERRADA!');
        }
      })
      .catch(err => {
        console.log('Erro: ' + err);
      });
  } catch (err) {
    console.log('Erro: ' + err);
  } finally {
    await driver.quit();
  }
})();

(async function testMultiplicacao () {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(page);
    const a = await driver.findElement(By.id('a'));
    const b = await driver.findElement(By.id('b'));
    await a.sendKeys(3);
    await b.sendKeys(9);
    await driver.findElement(By.id('botao_multiplicar')).click();
    await driver.findElement(By.id('resultado')).getText()
      .then(resultado => {
        if (resultado === 'Resultado da mutiplicacao: 27') {
          console.log('MULTIPLACAÇÃO: OK!');
        } else {
          console.log('MULTIPLACAÇÃO: ERRADA!');
        }
      })
      .catch(err => {
        console.log('Erro: ' + err);
      });
  } catch (err) {
    console.log('Erro: ' + err);
  } finally {
    await driver.quit();
  }
})();

(async function testCampoVazio () {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(page);
    await driver.findElement(By.id('botao_somar')).click();
    await driver.switchTo().alert().getText()
      .then(alert => {
        if (alert === 'preencha todos os campos') {
          console.log('ALERTA DE CAMPO VAZIO: OK!');
        } else {
          console.log('ALERTA DE CAMPO VAZIO: ERRADO!');
        }
      })
      .then(() => driver.switchTo().alert().dismiss())
      .catch(err => {
        console.log('Erro: ' + err);
      });
  } catch (err) {
    console.log('Erro: ' + err);
  } finally {
    await driver.quit();
  }
})();

(async function testTipoDeDado () {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(page);
    const a = await driver.findElement(By.id('a'));
    const b = await driver.findElement(By.id('b'));
    await a.sendKeys(4);
    await b.sendKeys('quatro');
    await driver.findElement(By.id('botao_multiplicar')).click();
    await driver.switchTo().alert().getText()
      .then(alert => {
        if (alert === 'digite somente números') {
          console.log('ALERTA DE TIPO DE DADO ERRADO: OK!');
        } else {
          console.log('ALERTA DE TIPO DE DADO ERRADO: ERRADO!');
        }
      })
      .then(() => driver.switchTo().alert().dismiss())
      .catch(err => {
        console.log('Erro: ' + err);
      });
  } catch (err) {
    console.log('Erro: ' + err);
  } finally {
    await driver.quit();
  }
})();
