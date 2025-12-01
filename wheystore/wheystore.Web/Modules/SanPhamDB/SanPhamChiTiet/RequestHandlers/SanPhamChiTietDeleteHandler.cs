using MyRow = wheystore.SanPhamDB.SanPhamChiTietRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamChiTietDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamChiTietDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamChiTietDeleteHandler
{
}