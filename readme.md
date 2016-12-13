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

## flex布局

    1. flex布局默认不换行(flex-wrap:nowrap),即使设置的width*item的尺寸超过了容器,
    他还是按照flex的比例分配空间,不参照子项目的width

    2. justify-content:指定沿着主轴子项目的对齐方式

        flex-start

        flex-end

        center

        space-between

        space-around

    3. align-items 区分align-content

    align-content 定义了多轴线的对齐方式(通常与flex-wrap:wrap一起运用)

    定义交叉轴上,子项目的对齐方式

    除了容器有重要的属性之外还可以设置子项的属性

    比如align-self设置自身的属性





## day10

   注意区分

    1. mouseover  mouseout mouseenter mouseleave
    2. keypress  keyup  keydown


## day11

thunk的概念和函数


## day14

    perspective属性 perspective函数都可设置3d场景，有一些区别

    1. perspective属性可以取值为none或长度值；而perspective()函数取值只能大于0，如果取值为0或比0小的值，将无法激活3D空间；
    2. perspective属性用于变形对像父元素；而perspective()函数用于变形对像自身，并和transform其他函数一起使用。





