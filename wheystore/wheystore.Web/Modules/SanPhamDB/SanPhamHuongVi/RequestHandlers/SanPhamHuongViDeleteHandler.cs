using MyRow = wheystore.SanPhamDB.SanPhamHuongViRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamHuongViDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamHuongViDeleteHandler
{
}