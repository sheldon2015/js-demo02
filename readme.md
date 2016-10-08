## 正则表达式



* \b字符边界

* 元字符

        1. []  归类   [abc]  a或b或c

            [^] 类取反  [^abc] 不是a b c

        2. 范围类  [a-z]

        3. 边界类  \b

        4. i, g ,m(多行)

        5. 量词

        6. 贪婪模式  非贪婪模式（量词后面加？）

        7. 分组

            分组在  | （或）中

            分组  与  引用  $1   $2

            忽略某些分组加  ?:

        8. 前瞻

            exg(?=exg)  符合后面的断言部分

            exg(?!=exg) 不符合后面的断言部分

        9. 对象属性

            lastIndex

        10. 方法

            test()

            exec()

            search()忽略g标志

            match() 于exec有区别没有分组的信息和index信息

## day05

    require.js相关的知识

    require.js需要server环境


## day08

    flexbox布局


## day09

    1. 默认情况
    
    background-color是从border外边开始计算

    background-image从padding的外边开始计算

    background-clip从border外边开始剪切

    background-origin设定背景图片的起点位置


##  day10
   注意区分
   
    1. mouseover  mouseout mouseenter mouseleave
    2. keypress  keyup  keydown





