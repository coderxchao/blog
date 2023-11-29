import{_ as e,o,c,Q as d}from"./chunks/framework.f0aa7f6c.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"category/others/linux/vim编辑器的一些常用指令.md","filePath":"category/others/linux/vim编辑器的一些常用指令.md"}'),l={name:"category/others/linux/vim编辑器的一些常用指令.md"},i=d('<blockquote><p>最近由于工作需要经常需要远程连接服务器，并且可能需要改一些服务器上的配置文件，虽然可以直接通过<code>vscode</code>远程连接直接通过<code>vscode</code>去操作修改，但是有的服务器通过<code>vscode</code>连接会直接造成内存占用过高，或者由于其他一些原因不方便使用<code>vscode</code>连接的情况下，那么可能就需要直接通过其他<code>ssh</code>工具去连接，这种情况下还是得熟悉一些常用的<code>linux</code>指令和<code>vim</code>操作指令。所以在此记录一些常用的<code>vim</code>指令。</p></blockquote><h2 id="打开文件" tabindex="-1">打开文件 <a class="header-anchor" href="#打开文件" aria-label="Permalink to &quot;打开文件&quot;">​</a></h2><ul><li><code>vim 文件名</code>：打开指定文件（如果没有会新建，也可以使用 vi 指令，不过 vim 是最新的）</li></ul><h2 id="进入编辑模式" tabindex="-1">进入编辑模式 <a class="header-anchor" href="#进入编辑模式" aria-label="Permalink to &quot;进入编辑模式&quot;">​</a></h2><ul><li><p><code>i</code>：在光标位置插入文本</p></li><li><p><code>a</code>：在光标后插入文本</p></li><li><p><code>o</code>：在当前行下方插入新行并进入编辑模式</p></li><li><p><code>O</code>：在当前行上方插入新行并进入编辑模式</p></li></ul><h2 id="退出编辑模式" tabindex="-1">退出编辑模式 <a class="header-anchor" href="#退出编辑模式" aria-label="Permalink to &quot;退出编辑模式&quot;">​</a></h2><ul><li><code>Esc</code>：退出编辑模式（如果觉得这个键不方便，可以自己单独配置成其他键）</li></ul><h2 id="保存与退出文件-需先按-esc-确保退出编辑模式" tabindex="-1">保存与退出文件（需先按 Esc 确保退出编辑模式） <a class="header-anchor" href="#保存与退出文件-需先按-esc-确保退出编辑模式" aria-label="Permalink to &quot;保存与退出文件（需先按 Esc 确保退出编辑模式）&quot;">​</a></h2><ul><li><code>:w</code>：保存文件</li><li><code>:q</code>：退出文件</li><li><code>:wq</code>：保存并退出</li><li><code>:q!</code>：强制退出，不保存修改</li></ul><h2 id="光标移动" tabindex="-1">光标移动 <a class="header-anchor" href="#光标移动" aria-label="Permalink to &quot;光标移动&quot;">​</a></h2><ul><li><code>h</code>：向左移动</li><li><code>j</code>：向下移动</li><li><code>k</code>：向上移动</li><li><code>l</code>：向右移动</li></ul><h2 id="删除和复制" tabindex="-1">删除和复制 <a class="header-anchor" href="#删除和复制" aria-label="Permalink to &quot;删除和复制&quot;">​</a></h2><ul><li><code>x</code>：删除光标所在位置的字符</li><li><code>dd</code>：删除当前行</li><li><code>yy</code>：复制当前行</li><li><code>p</code>：粘贴复制的内容</li></ul><h2 id="选择多行" tabindex="-1">选择多行 <a class="header-anchor" href="#选择多行" aria-label="Permalink to &quot;选择多行&quot;">​</a></h2><ul><li><code>V</code>：在非编辑模式下按下<code>V</code>进行可视模式，然后可以通过<code>h</code>,<code>j</code>,<code>k</code>,<code>l</code>来进行上下左右移动选中，选中后即可进行多行删除复制等操作</li><li><code>dG</code>：删除光标下方所有数据，如果想删除全部，则需在非编辑模式下先按<code>gg</code>将光标置于最顶部</li><li><code>ggyG</code>：复制光标下方所有数据</li><li><code>ggvG</code>：高亮光标下方所有数据</li></ul>',15),a=[i];function t(r,s,h,n,u,_){return o(),c("div",null,a)}const q=e(l,[["render",t]]);export{p as __pageData,q as default};
