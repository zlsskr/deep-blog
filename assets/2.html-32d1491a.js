import{_ as e,W as i,X as a,a1 as l}from"./framework-07d536f1.js";const d={},n=l(`<h1 id="数据结构与算法" tabindex="-1"><a class="header-anchor" href="#数据结构与算法" aria-hidden="true">#</a> 数据结构与算法</h1><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><p><strong>数据</strong>是一个广义的术语，可以指代各种类型的信息，包括最基本的数字和字符串。在经典的 “Hello World!”这个简单程序中，字符串&quot;Hello World!&quot;就是一条数据。事实上，无论是多么 复杂的数据，我们都可以将其拆成一堆数字和字符串来看待。<strong>数据结构</strong>则是指数据的组织形式。</p><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>内存中一片连续的空间</li><li>读取十分方便</li><li>增删查较为麻烦</li><li>空间大小固定</li><li>会因为使用场景的限制增加操作的时间复杂度(<strong>集合、有序、队列、栈</strong>等)</li></ul><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><ul><li>只能在末尾插入数据</li><li>只能读取末尾的数据</li><li>只能移除末尾的数据</li></ul><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><ul><li>只能在末尾插入数据</li><li>只能读取开头的数据</li><li>只能移除开头的数据</li></ul><h3 id="链表-单向、双向、循环" tabindex="-1"><a class="header-anchor" href="#链表-单向、双向、循环" aria-hidden="true">#</a> 链表(单向、双向、循环)</h3><ul><li>内存中不连续的空间，无需系统分配连续空间</li><li>读取不如数组快速，需要依次查找</li><li>插入和删除相对简单</li></ul><h3 id="散列表-hash表" tabindex="-1"><a class="header-anchor" href="#散列表-hash表" aria-hidden="true">#</a> 散列表(hash表)</h3><ul><li>hash函数</li><li>冲突处理 <ul><li>分离链接(大概像辣椒串)</li></ul></li><li>hash查找最优O(1) 最坏O(N)</li></ul><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3><ul><li>每个结点的子结点数量可为 0、1、2</li><li>如果有两个子结点，则其中一个子结点的值必须小于父结点，另一个子结点的值必须大于父结点</li><li>删除时要考虑结点从树上脱落</li></ul><h3 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h3><ul><li>广度优先</li><li>深度优先</li><li>最短路径算法</li><li>工期解决问题</li></ul><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><p>算法这个词听起来很深奥，其实不然。它只是解决某个问题的一套流程。准备一碗麦片的流程也可以说是一种算法，它包含以下 4 步（对我来说是 4 步吧）。</p><ol><li>拿个碗。</li><li>把麦片倒进碗里。</li><li>把牛奶倒进碗里。</li><li>把勺子放到碗里。</li></ol><h3 id="线性查找-o-n" tabindex="-1"><a class="header-anchor" href="#线性查找-o-n" aria-hidden="true">#</a> 线性查找 O(N)</h3><ul><li>依次查询</li></ul><h3 id="二分法-o-log-n" tabindex="-1"><a class="header-anchor" href="#二分法-o-log-n" aria-hidden="true">#</a> 二分法 O(log N)</h3><ul><li>在有序列表中进行<strong>对半</strong>查找</li></ul><h3 id="冒泡排序o-n2" tabindex="-1"><a class="header-anchor" href="#冒泡排序o-n2" aria-hidden="true">#</a> 冒泡排序O(N2)</h3><p>对<code>[4, 2, 7, 1, 3]</code>排序,每一轮冒出最大的泡。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4, 2, 7, 1, 3
2, 4, 7, 1, 3
2, 4, 1, 7, 3
2, 4, 1, 3, 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择排序o-n2" tabindex="-1"><a class="header-anchor" href="#选择排序o-n2" aria-hidden="true">#</a> 选择排序O(N2)</h3><p>对<code>[4, 2, 7, 1, 3]</code>排序,每一轮选择最小的值放到当前的检查点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4, 2, 7, 1, 3
1, 2, 7, 4, 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入排序o-n2" tabindex="-1"><a class="header-anchor" href="#插入排序o-n2" aria-hidden="true">#</a> 插入排序O(N2)</h3><p>对<code>[4, 2, 7, 1, 3]</code>排序,根据检查点左侧的情况决定是否插入或进入下一个检查点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4, 2, 7, 1, 3
2, 4, 7, 1, 3
2, 4, 1, 7, 3
2, 1, 4, 7, 3
1, 2, 4, 7, 3
1, 2, 4, 3, 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归的应用" tabindex="-1"><a class="header-anchor" href="#递归的应用" aria-hidden="true">#</a> 递归的应用</h3><p><code>fun</code>函数中调用<code>fun</code>函数即为递归.</p><h4 id="快速排序-选择o-n" tabindex="-1"><a class="header-anchor" href="#快速排序-选择o-n" aria-hidden="true">#</a> 快速排序/选择O(N)</h4><ul><li>依赖分区</li></ul><h4 id="二叉树的读取、插入、删除" tabindex="-1"><a class="header-anchor" href="#二叉树的读取、插入、删除" aria-hidden="true">#</a> 二叉树的读取、插入、删除</h4><p>递归十分适用于那些无法预估计算深度的问题。<strong>比如查找某个目录下的所有文件</strong> 掌握递归，你就解锁了一批高效但更为高深的算法。它们都离不开递归的原理</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>懂得区分最好、平均、最坏情况，是为当前场景选择最优算法以及给现有算法调优以适应环 境变化的关键。记住，虽然为最坏情况做好准备十分重要，但大部分时间我们面对的是平均情况。</p></div>`,40),r=[n];function h(s,t){return i(),a("div",null,r)}const o=e(d,[["render",h],["__file","2.html.vue"]]);export{o as default};
