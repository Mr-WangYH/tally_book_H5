/*
 * @Author: WangYunHong 18788604629@163.com
 * @Date: 2025-12-03 11:27:10
 * @LastEditors: WangYunHong 18788604629@163.com
 * @LastEditTime: 2025-12-03 11:31:08
 * @FilePath: /tally_book_h5/.prettierrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// .prettierrc.cjs
module.exports = {
  printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
  semi: true, // 行尾是否使用分号，默认为true
  trailingComma: 'es5', // 是否使用尾逗号
  htmlWhitespaceSensitivity: 'strict', // HTML空白敏感度
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
  proseWrap: 'never', // 换行设置
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  bracketSameLine: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};

