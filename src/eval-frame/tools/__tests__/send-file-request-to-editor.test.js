import sendFileRequestToEditor, {
  onParentContextFileRequestSuccess,
  onParentContextFileRequestError,
  fileRequests
} from "../send-file-request-to-editor";

jest.useFakeTimers();

describe("onParentContextFileRequestSuccess / onParentContextFileRequestError", () => {
  let resolveMock;
  let rejectMock;
  beforeEach(() => {
    Object.keys(fileRequests).forEach(k => {
      delete fileRequests[k];
    });
    resolveMock = jest.fn();
    rejectMock = jest.fn();
    fileRequests.tests = { resolve: resolveMock, reject: rejectMock };
  });
  it("resolves whatever is in fileRequestQueue if file name and fileRequestID are specified", () => {
    onParentContextFileRequestSuccess("content", "tests", "testKey");
    expect(resolveMock).toHaveBeenCalledTimes(1);
    expect(fileRequests.tests).toBe(undefined);
  });
  it("rejects whatever is in fileRequestQueue if file name and fileRequestID are specified", () => {
    onParentContextFileRequestError("content", "tests", "testKey");
    expect(rejectMock).toHaveBeenCalledTimes(1);
    expect(fileRequests.tests).toBe(undefined);
  });
});

describe("sendFileRequestToEditor integration tests", () => {
  beforeEach(() => {
    Object.keys(fileRequests).forEach(k => {
      delete fileRequests[k];
    });
  });
  it("returns a Promise that resolves when resolve is called", async () => {
    const FIRST_FILE = "tf1";
    const { request, fileRequestID } = sendFileRequestToEditor(
      FIRST_FILE,
      "LOAD_FILE",
      {}
    );
    jest.runAllTicks();
    onParentContextFileRequestSuccess("test-contents", fileRequestID);
    return expect(request).resolves.toBe("test-contents");
  });
  it("returns a Promise that rejects when reject is called", async () => {
    const FIRST_FILE = "tf1";
    const { request, fileRequestID } = sendFileRequestToEditor(
      FIRST_FILE,
      "SAVE_FILE",
      () => {}
    );
    jest.runAllTicks();
    onParentContextFileRequestError("error-message", fileRequestID);
    return expect(request).rejects.toBe("error-message");
  });
});
