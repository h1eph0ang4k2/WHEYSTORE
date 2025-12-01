using MyRow = wheystore.SanPhamDB.SanPhamHuongViRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamHuongViSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamHuongViSaveHandler
{
}