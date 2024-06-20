import{_ as n,W as s,X as a,a1 as e}from"./framework-07d536f1.js";const i={},t=e(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><p>常用的设计模式包括以下几种：</p><ol><li><p>创建型模式：主要用于创建对象，其代表包括工厂模式、单例模式、建造者模式和原型模式等。</p></li><li><p>结构型模式：主要用于处理对象之间的关系，其代表包括适配器模式、代理模式、装饰器模式、外观模式、桥接模式、组合模式和享元模式等。</p></li><li><p>行为型模式：主要用于管理对象和类之间的算法、定义、和/或职责，并且保证它们根据需求合作。其代表包括观察者模式、状态模式、策略模式、命令模式、解释器模式、调停者模式、备忘录模式、访问者模式和迭代器模式等。</p></li></ol><p>以上是常见的设计模式分类及其代表模式，每种模式都有其独特的解决问题的方式和优点。在实际应用中，我们可以根据具体情况选择合适的设计模式，提高程序的稳定性、可扩展性和可维护性</p><h2 id="设计模式基本要素" tabindex="-1"><a class="header-anchor" href="#设计模式基本要素" aria-hidden="true">#</a> 设计模式基本要素</h2><ul><li>模式名称</li></ul><p>一个助记名，它用一两个词来描述模式的问题、解决方案 和效果。命名一个新的模式增加了我们的设计词汇。设计模式允许我们在较高的抽象层次上 进行设计。基于一个模式词汇表，我们自己以及同事之间就可以讨论模式并在编写文档时使 用它们。模式名可以帮助我们思考，便于我们与其他人交流设计思想及设计结果。找到恰当 的模式名也是我们设计模式编目工作的难点之一。</p><ul><li>问题</li></ul><p>描述了应该在何时使用模式。它解释了设计问题和问题存在的前因后 果，它可能描述了特定的设计问题，如怎样用对象表示算法等。也可能描述了导致不灵活设 计的类或对象结构。有时候，问题部分会包括使用模式必须满足的一系列先决条件。</p><ul><li>解决方案</li></ul><p>描述了设计的组成成分，它们之间的相互关系及各自的职责和协 作方式。因为模式就像一个模板，可应用于多种不同场合，所以解决方案并不描述一个特定 而具体的设计或实现，而是提供设计问题的抽象描述和怎样用一个具有一般意义的元素组合 （类或对象组合）来解决这个问题。</p><ul><li>效果</li></ul><p>描述了模式应用的效果及使用模式应权衡的问题。尽管我们描述 设计决策时，并不总提到模式效果，但它们对于评价设计选择和理解使用模式的代价及好处 具有重要意义。软件效果大多关注对时间和空间的衡量，它们也表述了语言和实现问题。因 为复用是面向对象设计的要素之一，所以模式效果包括它对系统的灵活性、扩充性或可移植 性的影响，显式地列出这些效果对理解和评价这些模式很有帮助。</p><h3 id="常见的设计模式" tabindex="-1"><a class="header-anchor" href="#常见的设计模式" aria-hidden="true">#</a> 常见的设计模式</h3><h4 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h4><p>这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。</p><ul><li>工厂模式（Factory Pattern）</li><li>抽象工厂模式（Abstract Factory Pattern）</li><li>单例模式（Singleton Pattern）</li><li>建造者模式（Builder Pattern）</li><li>原型模式（Prototype Pattern）</li></ul><h4 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h4><p>这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。</p><ul><li>适配器模式（Adapter Pattern）</li><li>桥接模式（Bridge Pattern）</li><li>过滤器模式（Filter、Criteria Pattern）</li><li>组合模式（Composite Pattern）</li><li>装饰器模式（Decorator Pattern）</li><li>外观模式（Facade Pattern）</li><li>享元模式（Flyweight Pattern）</li><li>代理模式（Proxy Pattern）</li></ul><h4 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h4><p>这些设计模式特别关注对象之间的通信。</p><ul><li>责任链模式（Chain of Responsibility Pattern）</li><li>命令模式（Command Pattern）</li><li>解释器模式（Interpreter Pattern）</li><li>迭代器模式（Iterator Pattern）</li><li>中介者模式（Mediator Pattern）</li><li>备忘录模式（Memento Pattern）</li><li>观察者模式（Observer Pattern）</li><li>状态模式（State Pattern）</li><li>空对象模式（Null Object Pattern）</li><li>策略模式（Strategy Pattern）</li><li>模板模式（Template Pattern）</li><li>访问者模式（Visitor Pattern）</li></ul><h4 id="j2ee-模式" tabindex="-1"><a class="header-anchor" href="#j2ee-模式" aria-hidden="true">#</a> J2EE 模式</h4><p>这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。</p><ul><li>MVC 模式（MVC Pattern）</li><li>业务代表模式（Business Delegate Pattern）</li><li>组合实体模式（Composite Entity Pattern）</li><li>数据访问对象模式（Data Access Object Pattern）</li><li>前端控制器模式（Front Controller Pattern）</li><li>拦截过滤器模式（Intercepting Filter Pattern）</li><li>服务定位器模式（Service Locator Pattern）</li><li>传输对象模式（Transfer Object Pattern）</li></ul><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3><ul><li><strong>解决接口访问问题，统一接口</strong></li></ul><p>屏蔽掉调用者对对象创建的细节的关心，例如购买汽车的人只需要向汽车工厂购买，无需关心生产细节。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/企业微信截图_16783431143750.png" alt="工厂模式" tabindex="0" loading="lazy"><figcaption>工厂模式</figcaption></figure><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h3><ul><li><strong>解决接口访问问题，统一接口</strong></li></ul><p>本质是在多个工厂模式外套工厂模式</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230309144454.png" alt="抽象工厂模式" tabindex="0" loading="lazy"><figcaption>抽象工厂模式</figcaption></figure><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3><p><code>意图:</code>保证一个类仅有一个实例，并提供一个访问它的全局访问点。</p><p><code>主要解决：</code>一个全局使用的类频繁地创建与销毁。</p><p><code>何时使用：</code>当您想控制实例数目，节省系统资源的时候。</p><p><code>如何解决：</code>判断系统是否已经有这个单例，如果有则返回，如果没有则创建。</p><p><code>关键代码：</code>构造函数是私有的。</p><p><strong>应用实例：</strong></p><ul><li>一个班级只有一个班主任。</li><li>Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。</li><li>一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。</li></ul><p><strong>优点：</strong></p><ul><li>在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。</li><li>避免对资源的多重占用（比如写文件操作）。</li></ul><p>缺点：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。</p><p><strong>使用场景：</strong></p><ul><li>要求生产唯一序列号。</li><li>WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。</li><li>创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。</li></ul><p>注意事项：getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230309150114.png" alt="单例模式" tabindex="0" loading="lazy"><figcaption>单例模式</figcaption></figure><ul><li>c代码demo <ul><li>list.c</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***************************************************
 * Copyright (C), 2020-2023, hkzy Co., Ltd.:
* FileName     :
* Author       : 周淋深
* Description  : this is the list file
* Others       :
* Function List:   int init_list(List *list)
                    int show_list(List *list)
                    int insert_list(List *list, int data)
* LastEditTime : 2023-03-20 10:13:25
* FilePath     : \\0-C语言代码规范\\list.c
***************************************************/</span>

<span class="token comment">/***************************************************
* 头文件包含
****************************************************/</span>
<span class="token comment">/* 库函数头文件*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;semaphore.h&gt;</span></span>

<span class="token comment">/* 自定义头文件包含*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;list.h&quot;</span></span>

<span class="token class-name">sem_t</span> init_sem<span class="token punctuation">;</span>

<span class="token comment">/***************************************************
* 名称: init_list
* 描述: 初始化List
* 参数: List *list
*       链表的头指针
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">init_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 参数判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// init list</span>
    list<span class="token operator">-&gt;</span>data <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    list<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: single_init_list
* 描述:  单例模式实例化list
* 参数: void
* 返回: List * list
*       实例化的对象指针
***************************************************/</span>
List <span class="token operator">*</span><span class="token function">single_init_list</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> init_flag <span class="token operator">=</span> NOT_INIT<span class="token punctuation">;</span>    <span class="token comment">// 未实例化的标志</span>
    List <span class="token operator">*</span>l <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token function">sem_wait</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>init_sem<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 上锁，保证多线程时的原子性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>NOT_INIT<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        l <span class="token operator">=</span> <span class="token punctuation">(</span>List <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> l<span class="token punctuation">;</span>
            <span class="token function">sem_post</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>init_sem<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 实例化</span>
        l<span class="token operator">-&gt;</span>data <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        l<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

        init_flag <span class="token operator">=</span> ALREADY_INIT<span class="token punctuation">;</span>    <span class="token comment">// 已实例化标志</span>
    <span class="token punctuation">}</span>
    <span class="token function">sem_post</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>init_sem<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> l<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: destroy_list
* 描述:
* 参数: List *list
*       链表的头指针
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">destroy_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    List <span class="token operator">*</span>temp_list <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 参数判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 遍历销毁</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        temp_list <span class="token operator">=</span> list<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list <span class="token operator">=</span> temp_list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: show_list
* 描述: 遍历打印链表data
* 参数: List *list
*       链表的头指针
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">show_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 参数判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 遍历打印</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/* code */</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> list<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list <span class="token operator">=</span> <span class="token punctuation">(</span>List <span class="token operator">*</span><span class="token punctuation">)</span>list<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: insert_list
* 描述:
* 参数: List *list, int data
*       list 链表头
*       data 插入链表的数据
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">insert_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*局部变量声明*/</span>
    List <span class="token operator">*</span>tmp <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>    <span class="token comment">// 定义list的新结点</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 参数判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// init tmp</span>
    tmp <span class="token operator">=</span> <span class="token punctuation">(</span>List <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// init list</span>
    tmp<span class="token operator">-&gt;</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    tmp<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// insert list</span>
    tmp<span class="token operator">-&gt;</span>next <span class="token operator">=</span> list<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    list<span class="token operator">-&gt;</span>next <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: sort_list
* 描述:
* 参数: void *arg
*       arg   list排序需要的参数
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">sort_list</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*局部变量声明*/</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> tmp_data<span class="token punctuation">;</span>
    List <span class="token operator">*</span>tmp <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    List <span class="token operator">*</span>list <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">// 参数判断</span>
    list <span class="token operator">=</span> <span class="token punctuation">(</span>List <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*排序规则*/</span>
    tmp <span class="token operator">=</span> list<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> list<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> list <span class="token operator">=</span> list<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>tmp <span class="token operator">=</span> list<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> tmp <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> tmp <span class="token operator">=</span> tmp<span class="token operator">-&gt;</span>next<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp<span class="token operator">-&gt;</span>data <span class="token operator">&gt;</span> list<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                tmp_data <span class="token operator">=</span> list<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
                list<span class="token operator">-&gt;</span>data <span class="token operator">=</span> tmp<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
                tmp<span class="token operator">-&gt;</span>data <span class="token operator">=</span> tmp_data<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***************************************************
* 名称: callback_fun
* 描述:
* 参数: Func handler, void *arg
*       Handler 句柄,可用来做list自身的一些行为，如排序、销毁，
*       arg     句柄需要的参数
* 返回: int ret
*       0 successful
*       -1 fail
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">callback_fun</span><span class="token punctuation">(</span>Func handler<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    ret <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*******************************************************************************
* EOF (not truncated)
******************************************************************************/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>list.h</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***************************************************
 * Copyright (C), 2020-2023, hkzy Co., Ltd.:
* FileName     :
* Author       : 周淋深
* Description  :list.h
* Others       :
* Function List:
* LastEditTime : 2023-03-20 10:08:07
* FilePath     : \\0-C语言代码规范\\list.h
***************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">_LIST_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">_LIST_H</span></span>

<span class="token comment">/***************************************************
* 引入宏定义
****************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NOT_INIT</span>     <span class="token expression"><span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ALREADY_INIT</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token comment">/***************************************************
* 引入结构体定义
****************************************************/</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> data<span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> List<span class="token punctuation">;</span>

<span class="token comment">/***************************************************
* list句柄类型定义
****************************************************/</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Func<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***************************************************
* 函数声明
****************************************************/</span>
<span class="token keyword">int</span> <span class="token function">init_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
List <span class="token operator">*</span><span class="token function">single_init_list</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">show_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">insert_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">,</span> <span class="token keyword">int</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">sort_list</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">callback_fun</span><span class="token punctuation">(</span>Func handler<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">destroy_list</span><span class="token punctuation">(</span>List <span class="token operator">*</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***************************************************
* 暴露全局变量
****************************************************/</span>
<span class="token keyword">extern</span> <span class="token class-name">sem_t</span> init_sem<span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*_LIST_H*/</span></span>

<span class="token comment">/*******************************************************************************
* EOF (not truncated)
******************************************************************************/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>main.c</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***************************************************
 * Copyright (C), 2020-2023, hkzy Co., Ltd.:
* FileName     :
* Author       : 周淋深
* Description  : this is a code demo
* Others       :
* Function List:
* LastEditTime : 2023-03-20 10:07:51
* FilePath     : \\0-C语言代码规范\\main.c
***************************************************/</span>

<span class="token comment">/*******************************************************************************
* 头文件包含
******************************************************************************/</span>
<span class="token comment">/*本地头文件包含*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;semaphore.h&gt;</span></span>

<span class="token comment">/*本地头文件包含*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;list.h&quot;</span></span>

<span class="token comment">/***************************************************
* 名称: main
* 描述: 逻辑函数
* 参数: void
* 返回: void
***************************************************/</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*局部变量声明*/</span>
    <span class="token keyword">int</span> ret <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    List L<span class="token punctuation">;</span>
    List <span class="token operator">*</span>list <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    Func handler <span class="token operator">=</span> sort_list<span class="token punctuation">;</span>    <span class="token comment">// 声明排序的句柄</span>

    <span class="token comment">// 初始化信号量</span>
    <span class="token function">sem_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>init_sem<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*初始化L*/</span>
    <span class="token comment">// list = &amp;L;</span>
    <span class="token comment">// ret = init_list(list);</span>
    <span class="token comment">// if (0 != ret)</span>
    <span class="token comment">// {</span>
    <span class="token comment">//     printf(&quot;init list fail!\\n&quot;);</span>
    <span class="token comment">//     return -1;</span>
    <span class="token comment">// }</span>

    <span class="token comment">/*单例模式初始化L*/</span>
    list <span class="token operator">=</span> <span class="token function">single_init_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;init list fail!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*头插5个数据数据到L中*/</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ret <span class="token operator">=</span> <span class="token function">insert_list</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert list fail %d!\\n&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*使用回调，对L排序*/</span>
    <span class="token function">callback_fun</span><span class="token punctuation">(</span>handler<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*打印L*/</span>
    ret <span class="token operator">=</span> <span class="token function">show_list</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;print list fail!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*销毁*/</span>
    ret <span class="token operator">=</span> <span class="token function">destroy_list</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">!=</span> ret<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;print list fail!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*******************************************************************************
* EOF (not truncated)
******************************************************************************/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h3><p>建造者模式（Builder Pattern）使用多个简单的对象一步一步构建成一个复杂的对象。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><div class="hint-container info"><p class="hint-container-title">实现</p><p>我们假设一个快餐店的商业案例，其中，一个典型的套餐可以是一个汉堡（Burger）和一杯冷饮（Cold drink）。汉堡（Burger）可以是素食汉堡（Veg Burger）或鸡肉汉堡（Chicken Burger），它们是包在纸盒中。冷饮（Cold drink）可以是可口可乐（coke）或百事可乐（pepsi），它们是装在瓶子中。</p><p>我们将创建一个表示食物条目（比如汉堡和冷饮）的 Item 接口和实现 Item 接口的实体类，以及一个表示食物包装的 Packing 接口和实现 Packing 接口的实体类，汉堡是包在纸盒中，冷饮是装在瓶子中。</p><p>然后我们创建一个 Meal 类，带有 Item 的 ArrayList 和一个通过结合 Item 来创建不同类型的 Meal 对象的 MealBuilder。BuilderPatternDemo 类使用 MealBuilder 来创建一个 Meal。</p></div><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230309151214.png" alt="建造者模式" tabindex="0" loading="lazy"><figcaption>建造者模式</figcaption></figure><h3 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式" aria-hidden="true">#</a> 原型模式</h3><p>当一个类的实例化，只有有限的几种情形(比如俄罗斯方块的形状)，且对象的创建需要大量的资源时，使用原型模式，直接克隆。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230309152457.png" alt="原型模式" tabindex="0" loading="lazy"><figcaption>原型模式</figcaption></figure><h3 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h3><p>M<em>N的组合时，不必写M</em>N个类</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417160005.png" alt="桥接模式" tabindex="0" loading="lazy"><figcaption>桥接模式</figcaption></figure><h3 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h3><p>当你的程序中存在大量相似对象，每个对象之间只是根据不同的使用场景有些许变化时。节约内存。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417184117.png" alt="享元模式" tabindex="0" loading="lazy"><figcaption>享元模式</figcaption></figure><h3 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h3><p>静态代理是指预先确定了代理与被代理者的关系，例如王二狗的代理律师方文镜是在开庭前就确定的了。那映射到编程领域的话，就是指代理类与被代理类的依赖关系在编译期间就确定了。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230418113008.png" alt="静态代理" tabindex="0" loading="lazy"><figcaption>静态代理</figcaption></figure><h3 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h3><p>责任链模式是一个相对比较简单的模式，它的名字已经非常好的暗示了其工作原理。每个处理器互相首尾连接在一起成为一条链，然后任务顺着这条链往下传，直到被某个处理器处理掉。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230418134911.png" alt="责任链模式" tabindex="0" loading="lazy"><figcaption>责任链模式</figcaption></figure><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h3><p>命令模式是一种行为型设计模式，它将请求（命令）封装成一个独立的对象，从而使不同的请求可以被不同的对象处理。该模式的目的是将请求发送者与请求接受者解耦，从而提高系统的灵活性、扩展性和可维护性。</p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230418145723.png" alt="命令模式" tabindex="0" loading="lazy"><figcaption>命令模式</figcaption></figure><h3 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h3><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230419114520.png" alt="状态模式" tabindex="0" loading="lazy"><figcaption>状态模式</figcaption></figure><h3 id="类之间的关系及uml语法" tabindex="-1"><a class="header-anchor" href="#类之间的关系及uml语法" aria-hidden="true">#</a> 类之间的关系及uml语法</h3><ul><li>依赖关系</li></ul><p>类A的方法需要类B的对象作为参数传入, 则A依赖B,<code>A ..&gt; B</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417144938.png" alt="依赖" tabindex="0" loading="lazy"><figcaption>依赖</figcaption></figure><ul><li>关联关系</li></ul><p>关联是强依赖关系，区别在于，类A关联类B，区别在于B作为A的成员变量,<code>A --&gt; B</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417145957.png" alt="关联关系" tabindex="0" loading="lazy"><figcaption>关联关系</figcaption></figure><ul><li>聚合关系</li></ul><p>聚合关系是一种has-a关系，假设有两个类，类A和类B，类A包含类B，类B是类A的成员变量，聚合关系和关联关系都体现在成员变量，它们的区别在于：关联关系双方是平级的，是个体和个体的关系，聚合关系双方不是平级的，是整体和部分的关系.<code>DISK --o Computer</code>,<code>CPU --o Computer</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417150425.png" alt="聚合关系" tabindex="0" loading="lazy"><figcaption>聚合关系</figcaption></figure><ul><li>组合关系</li></ul><p>组合关系是一种强聚合的关系，组合关系与聚合关系的区别在于：聚合关系中部分离开整体仍可存活，组合关系中部分离开整体没有意义，比如：人由身体、四肢等部分组成 ，它们的关系为组合关系。<code>DISK --* Computer</code>,<code>CPU --* Computer</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417150612.png" alt="组合关系" tabindex="0" loading="lazy"><figcaption>组合关系</figcaption></figure><ul><li>继承关系（泛化关系 Generalization）</li></ul><p>一个类是另一个类的扩展, <code>A --|&gt; B</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417151115.png" alt="继承" tabindex="0" loading="lazy"><figcaption>继承</figcaption></figure><ul><li>实现关系</li></ul><p>继承抽象类，并必须要实现其抽象接口, <code>A ..|&gt; B</code></p><figure><img src="https://zhoulinshen.oss-cn-chengdu.aliyuncs.com/20230417151448.png" alt="实现关系" tabindex="0" loading="lazy"><figcaption>实现关系</figcaption></figure>`,93),p=[t];function l(c,o){return s(),a("div",null,p)}const r=n(i,[["render",l],["__file","3.html.vue"]]);export{r as default};
