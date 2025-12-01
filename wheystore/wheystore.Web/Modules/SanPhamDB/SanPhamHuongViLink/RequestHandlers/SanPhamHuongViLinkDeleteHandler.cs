using MyRow = wheystore.SanPhamDB.SanPhamHuongViLinkRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViLinkDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class SanPhamHuongViLinkDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ISanPhamHuongViLinkDeleteHandler
{
}