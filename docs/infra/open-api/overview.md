# Overview

<div style="color: #646a73; font-family: Arial, sans-serif; font-size: 13px;">
  Last updated on 2022-11-27
</div>
<div style="margin-top: 25px; margin-bottom: 5px;">
  <p style="font-size: 14px;">
    The API provided by this platform follows the RESTful style, and the request URL is in the following format.
  </p>
	<img style="outline-style: none; border: 1px; border: 1px solid #ccc;" src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/104a574c3c62ac0a13ba23bf1934681d_clVH8rQTcr.png?lazyload=true&amp;width=3384&amp;height=354" alt="#">
</div>

<div style="background-color: #eef6ff; padding: 10px 10px 30px 10px;">
  <p>
    <img style="width: 16px; padding-right: 2px; top: 2px; left: -2px; position: relative;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNEU4M0ZEIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEuNzUgMTFBOS4yNSA5LjI1IDAgMCAwIDExIDIwLjI1IDkuMjUgOS4yNSAwIDAgMCAyMC4yNSAxMSA5LjI1IDkuMjUgMCAwIDAgMTEgMS43NSA5LjI1IDkuMjUgMCAwIDAgMS43NSAxMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNEU4M0ZEIiBkPSJNMTAuMTM0IDE1Ljk4M2MtLjc4OC0uMTI1LTEuMTEyLS42NzQtLjk0LTEuMjMzbDEuNDg0LTQuNzg1YS4yMjUuMjI1IDAgMCAwLS4xMzUtLjI4Yy0uMTA5LS4wMzgtLjMyNC4xLS41MS4yOThsLS44OTYgMS4wNTFjLS4wMjUtLjE3Ni0uMDAzLS40NjgtLjAwMy0uNTg2LjY3NC0uOTg1IDEuNzgxLTEuNzYyIDIuNTMzLTEuNzYyLjcxNC4wNzEgMS4wNTIuNjI2LjkyOCAxLjIzN0wxMS4xIDE0LjczMWMtLjAyLjEwOS4wNC4yMi4xNC4yNTQuMTEuMDM4LjM0LS4xMDEuNTI3LS4zbC44OTYtMS4wNWMuMDI1LjE3Ni0uMDE2LjQ4Ni0uMDE2LjYwNC0uNjczLjk4NC0xLjM2IDEuNzQ0LTIuNTEzIDEuNzQ0ek0xMi4wMzcgNmMuMTY5IDAgLjMzOC4wNDQuNTA2LjEzM2ExLjAzMiAxLjAzMiAwIDAgMSAuMzk3IDEuNDMxYy0uMDkyLjE2MS0uMjIuMjktLjM4My4zODRhLjk4Ljk4IDAgMCAxLS41Mi4xMzUgMS4wMTggMS4wMTggMCAwIDEtLjg5Ni0uNTIgMS4wNjEgMS4wNjEgMCAwIDEtLjE0LS41MjEgMS4wMTUgMS4wMTUgMCAwIDEgLjE0LS41MjguOTYxLjk2MSAwIDAgMSAuMzktLjM3OGMuMTY1LS4wODcuMzM0LS4xMzIuNTA2LS4xMzZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
    <strong>Note:</strong>
  </p>
  <ul style="list-style-type: none; line-height: 26px;">
    <li style="font-size: 14px;">
      •&nbsp;&nbsp;&nbsp;
      When calling the API, you must carry the access credentials in the HTTP Header in order to get the resource information within the scope range. It provides two api interface authentication methods, you can choose the <span style="color: SteelBlue;">‘Bearer Token’</span> or <span style="color: SteelBlue;">‘Basic Auth’</span> you are used to.
    </li>
    <li style="font-size: 14px;">
      •&nbsp;&nbsp;&nbsp;
      You can apply for OpenAPI permission from the administrator.
    </li>
    <li style="font-size: 14px;">
      •&nbsp;&nbsp;&nbsp;
      By default, the API's request rate throttle is <span style="color: SteelBlue;">10/QPS</span> (query per second) .
    </li>
    <li style="font-size: 14px;">
      •&nbsp;&nbsp;&nbsp;
      The next post is about creating a HTTP service for CRUD operations using Web Restful API. CRUD stands for "Create, Read, Update, and Delete," which are the four basic database operations.
    </li>
  </ul>
</div>

<div class="Copyright" style="margin-top:100px; font-size: 12px; height: 20px; line-height: 20px; background: none;">
  <!--使用flex布局，文本垂直居中-->
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <a href="https://open.feishu.cn/" style="text-decoration: none;">
      <span style="color: CadetBlue;">Refer to Feishu Open Platform</span>
    </a>
    <span style="color: #666666; font-size: 12px;">@&nbsp;Pokeya</span>
  </div>
</div>
