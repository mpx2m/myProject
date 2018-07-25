import * as Handlebars from '../node_modules/handlebars/dist/handlebars.js';

export const main = Handlebars.compile(`
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed"
            data-toggle="collapse" data-target=".navbar-collapse"
            aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/" style="color:#272822">RainyDev</a>
        <a class="navbar-brand" href="#welcome"><small>书单应用</small></a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#list-bundles">
              <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
              我的书单
            </a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->

    </div><!-- /.container-fluid -->
  </nav>
  <div class="container">
    <div class="b4-alerts"></div>
    <div class="b4-main"></div>
  </div>
`);

export const welcome = Handlebars.compile(`
  <div class="jumbotron">
    <h1>Welcome!</h1>
    <p>这是一个可以从Elasticsearch数据库中创建自己书单的应用。</p>
    <p>
      <a href="#list-bundles">
        <button type="button" class="btn btn-success" style="postion:relative">
          <span class="glyphicon glyphicon-list-alt" aria-hidden="true" style="top:2px"></span> 查看书单
        </button>
      </a>
    </p>
  </div>
`);

export const alert = Handlebars.compile(`
  <div class="alert alert-{{type}} alert-dismissible fade in" role="alert">
    <button class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{message}}
  </div>
`);

export const listBundles = Handlebars.compile(`
  <div class="panel panel-default">
    <div class="panel-heading">我的书单</div>
    {{#if bundles.length}}
      <table class="table">
        <tr>
          <th>书单名称</th>
          <th>操作</th>
        </tr>
        {{#each bundles}}
        <tr>
          <td>
            <a href="#view-bundle/{{id}}">{{name}}</a>
          </td>
          <td>
            <button class="btn delete btn-link" data-bundle-id="{{id}}" style="padding-left:0px; padding-right:0px; color:#DF5E56">
              删除
            </button>
          </td>
        </tr>
        {{/each}}
      </table>
    {{else}}
      <div class="panel-body">
        <p>尚未添加！</p>
      </div>
    {{/if}}
  </div>
`);

export const addBundleForm = Handlebars.compile(`
  <div class="panel panel-default">
    <div class="panel-heading">创建新的书单</div>
    <div class="panel-body">
      <form>
        <div class="input-group">
          <input class="form-control" placeholder="书单名称" />
          <span class="input-group-btn">
            <button class="btn btn-primary" type="submit">创建</button>
          </span>
        </div>
      </form>
    </div>
  </div>
`);

export const viewBundle = Handlebars.compile(`
  <h3>{{bundle.name}}</h3>

  <div class="panel panel-default">
    <div class="panel-heading">添加书本到书单</div>
    <div class="panel-body">
      <form>
        <div class="input-group">
          <input class="form-control" list="results" placeholder="搜索Elasticsearch电子书数据库（英文）..." />
          <datalist id="results"></datalist>
          <span class="input-group-btn">
            <button class="btn btn-primary" type="submit">搜索</button>
          </span>
        </div>
      </form>
    </div>
    <div class="search-results"></div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">此书单书本</div>
    {{#if bundle.books.length}}
      <table class="table">
        <thead>
          <tr>
            <th>书名</th>
            <th class="actions">操作</th>
          </tr>
        </thead>
        <tbody>
          {{#each bundle.books}}
          <tr>
            <td>
              <a href="#view-book/{{this.id}}">{{this.title}}</a>
            </td>
            <td>
              <button class="btn delete btn-link" data-id="{{this.id}}"
                  data-title="{{this.title}}"
                  style="padding-left:0px; padding-right:0px; color:#DF5E56">删除
              </button>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>

    {{else}}
      <div class="panel-body">
        <p>尚未添加!</p>
      </div>
    {{/if}}
  </div>
`);

export const listSearchResults = Handlebars.compile(`
  <table class="table">
    <thead>
      <tr>
        <th>书名</th>
        <th class="actions"><span>操作</span></th>
      </tr>
    </thead>
    <tbody>
      {{#each this}}
      <tr>
        <td>
          {{this.title}}
        </td>
        <td>
          <button class="btn add btn-success btn-xs"
            data-id="pg{{this.id}}" data-title="{{this.title}}">添加</button>
        </td>
      </tr>
      {{/each}}
    </tbody>
  </table>
`);

export const options = Handlebars.compile(`
  {{#each this}}
  <option value="{{this}}" />
  {{/each}}
`);

export const viewBook = Handlebars.compile(`
  <h2>{{book.title}}</h2>

  <p>
    <a href="http://www.gutenberg.org/ebooks/{{book.id}}">
    http://www.gutenberg.org/ebooks/{{book.id}}</a>
  </p>

  <h3>作者</h3>
  {{#if book.authors.length}}
    <ul>
    {{#each book.authors}}
      <li>{{this}}</li>
    {{/each}}
    </ul>
  {{else}}
    <p>None listed.</p>
  {{/if}}

  <h3>题材</h3>
  {{#if book.subjects.length}}
    <ul>
    {{#each book.subjects}}
      <li>{{this}}</li>
    {{/each}}
    </ul>
  {{else}}
    <p>None listed.</p>
  {{/if}}
`);
