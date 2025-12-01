using MyRow = wheystore.SanPhamDB.SanPhamNoiDungRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamNoiDungDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamNoiDungDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamNoiDungDeleteHandler
{
}