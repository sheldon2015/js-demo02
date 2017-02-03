# svg

## day01

复杂路径判断一个点是否在路径内:

1. nozero 非0环绕原则  非0则认为在内部。

1. evenodd 奇偶原则,奇数则在图形内部。

1. mask的透明度的计算

  1. 理清mask和masked object对象的透明度

  1. 理清mask和masked object的invisiable  和visiable

  这两者是不同的概念
